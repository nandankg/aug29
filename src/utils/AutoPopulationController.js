/**
 * AutoPopulationController - Intelligent auto-population that respects user input
 * Prevents auto-population conflicts and preserves user data during operations
 */

class AutoPopulationController {
  constructor() {
    this.populationRules = new Map();
    this.fieldHistory = new Map();
    this.debugMode = process.env.NODE_ENV === 'development';
  }

  /**
   * Register auto-population rules for a form
   */
  registerPopulationRules(formId, rules) {
    this.populationRules.set(formId, rules);

    if (this.debugMode) {
      console.log(`[AutoPopulationController] Registered rules for ${formId}:`, rules);
    }
  }

  /**
   * Determine if a field should be auto-populated
   */
  shouldAutoPopulate(formId, fieldName, context = {}) {
    const rules = this.populationRules.get(formId);

    if (!rules || !rules[fieldName]) {
      // Apply default logic if no specific rules
      return this.applyDefaultLogic(fieldName, context);
    }

    const rule = rules[fieldName];

    if (typeof rule === 'boolean') {
      return rule;
    }

    if (typeof rule === 'function') {
      try {
        return rule(context);
      } catch (error) {
        console.error(`[AutoPopulationController] Rule evaluation error for ${fieldName}:`, error);
        return false; // Default to no auto-population on error
      }
    }

    if (typeof rule === 'object') {
      return this.evaluatePopulationRule(rule, context);
    }

    return this.applyDefaultLogic(fieldName, context);
  }

  /**
   * Apply default auto-population logic
   */
  applyDefaultLogic(fieldName, context) {
    const {
      isEditMode = false,
      hasUserInput = false,
      hasExistingValue = false,
      isUserAction = true,
      rowNumber = 1
    } = context;

    // Never auto-populate during edit operations
    if (isEditMode) {
      return false;
    }

    // Never auto-populate if user has already provided input
    if (hasUserInput) {
      return false;
    }

    // Don't auto-populate if field already has a value
    if (hasExistingValue) {
      return false;
    }

    // Special field-specific rules
    const fieldSpecificRules = {
      'receivingDate': !isEditMode,
      'employeeName': rowNumber === 1, // Only first row
      'stationId': !hasExistingValue,
      'verifiedBy': !isEditMode,
      'timestamp': true, // Always auto-populate timestamps
      'createdAt': true,
      'updatedAt': true
    };

    if (fieldSpecificRules.hasOwnProperty(fieldName)) {
      return fieldSpecificRules[fieldName];
    }

    // Default: allow auto-population for new fields only
    return !hasExistingValue && !isEditMode;
  }

  /**
   * Evaluate complex population rules
   */
  evaluatePopulationRule(rule, context) {
    const {
      allowInEditMode = false,
      ignoreUserInput = false,
      allowOverwrite = false,
      conditions = [],
      dependencies = [],
      rowSpecific = null
    } = rule;

    // Check edit mode permission
    if (context.isEditMode && !allowInEditMode) {
      return false;
    }

    // Check user input override
    if (context.hasUserInput && !ignoreUserInput) {
      return false;
    }

    // Check existing value override
    if (context.hasExistingValue && !allowOverwrite) {
      return false;
    }

    // Check row-specific rules
    if (rowSpecific !== null) {
      if (typeof rowSpecific === 'number') {
        return context.rowNumber === rowSpecific;
      }
      if (Array.isArray(rowSpecific)) {
        return rowSpecific.includes(context.rowNumber);
      }
    }

    // Evaluate conditions
    if (conditions.length > 0) {
      return conditions.every(condition => this.evaluateCondition(condition, context));
    }

    // Check dependencies
    if (dependencies.length > 0) {
      return dependencies.every(dep => this.checkDependency(dep, context));
    }

    return true;
  }

  /**
   * Evaluate a single condition
   */
  evaluateCondition(condition, context) {
    if (typeof condition === 'function') {
      return condition(context);
    }

    if (typeof condition === 'object') {
      const { field, operator, value } = condition;
      const fieldValue = context.formData?.[field];

      switch (operator) {
        case 'equals':
          return fieldValue === value;
        case 'notEquals':
          return fieldValue !== value;
        case 'isEmpty':
          return !fieldValue || fieldValue === '';
        case 'isNotEmpty':
          return fieldValue && fieldValue !== '';
        case 'contains':
          return String(fieldValue).includes(String(value));
        default:
          return true;
      }
    }

    return Boolean(condition);
  }

  /**
   * Check field dependencies
   */
  checkDependency(dependency, context) {
    const { field, required = true } = dependency;
    const fieldValue = context.formData?.[field];

    if (required) {
      return fieldValue !== undefined && fieldValue !== null && fieldValue !== '';
    } else {
      return fieldValue === undefined || fieldValue === null || fieldValue === '';
    }
  }

  /**
   * Perform auto-population with validation
   */
  autoPopulateField(formId, fieldName, context, autoValue) {
    if (!this.shouldAutoPopulate(formId, fieldName, context)) {
      return context.currentValue || '';
    }

    // Track auto-population history
    this.trackFieldHistory(formId, fieldName, {
      action: 'auto_populate',
      value: autoValue,
      context: { ...context },
      timestamp: Date.now()
    });

    if (this.debugMode) {
      console.log(`[AutoPopulationController] Auto-populated ${fieldName} with:`, autoValue);
    }

    return autoValue;
  }

  /**
   * Track field modification history
   */
  trackFieldHistory(formId, fieldName, entry) {
    const key = `${formId}_${fieldName}`;

    if (!this.fieldHistory.has(key)) {
      this.fieldHistory.set(key, []);
    }

    const history = this.fieldHistory.get(key);
    history.push(entry);

    // Keep only last 10 entries to prevent memory issues
    if (history.length > 10) {
      history.shift();
    }
  }

  /**
   * Get field modification history
   */
  getFieldHistory(formId, fieldName) {
    const key = `${formId}_${fieldName}`;
    return this.fieldHistory.get(key) || [];
  }

  /**
   * Create auto-population context
   */
  createAutoPopulationContext(formState, fieldName, rowIndex = 0) {
    const { editMode, userModifiedFields, formData } = formState;

    return {
      isEditMode: editMode || false,
      hasUserInput: userModifiedFields?.includes(fieldName) || false,
      hasExistingValue: formData?.[fieldName] !== null &&
                       formData?.[fieldName] !== undefined &&
                       formData?.[fieldName] !== '',
      rowNumber: rowIndex + 1,
      currentValue: formData?.[fieldName],
      formData: formData || {},
      isUserAction: true
    };
  }

  /**
   * Bulk auto-population for multiple fields
   */
  autoPopulateFields(formId, fieldsToPopulate, context) {
    const results = {};

    Object.entries(fieldsToPopulate).forEach(([fieldName, autoValue]) => {
      const fieldContext = {
        ...context,
        currentValue: context.formData?.[fieldName]
      };

      results[fieldName] = this.autoPopulateField(
        formId,
        fieldName,
        fieldContext,
        autoValue
      );
    });

    return results;
  }

  /**
   * Clear field history for a form
   */
  clearFieldHistory(formId) {
    const keysToDelete = [];

    this.fieldHistory.forEach((value, key) => {
      if (key.startsWith(`${formId}_`)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.fieldHistory.delete(key));
  }

  /**
   * Create common auto-population rules
   */
  static createCommonRules() {
    return {
      // Never auto-populate in edit mode
      neverInEdit: {
        allowInEditMode: false,
        allowOverwrite: false
      },

      // Only auto-populate empty fields
      onlyEmpty: {
        allowOverwrite: false,
        ignoreUserInput: false
      },

      // Auto-populate timestamps always
      alwaysTimestamp: {
        allowInEditMode: true,
        allowOverwrite: true,
        ignoreUserInput: true
      },

      // Row-specific auto-population
      firstRowOnly: {
        rowSpecific: 1,
        allowOverwrite: false
      },

      // Conditional auto-population
      conditionalPopulation: (conditions) => ({
        conditions: conditions,
        allowOverwrite: false
      }),

      // Dependent field auto-population
      dependentPopulation: (dependencies) => ({
        dependencies: dependencies,
        allowOverwrite: false
      })
    };
  }

  /**
   * Create a React hook for auto-population
   */
  createAutoPopulationHook() {
    return (formId, fieldName, autoValue, dependencies = []) => {
      const [shouldPopulate, setShouldPopulate] = React.useState(false);

      React.useEffect(() => {
        // This would need to be integrated with form context
        const context = this.getFormContext?.(formId) || {};
        const should = this.shouldAutoPopulate(formId, fieldName, context);
        setShouldPopulate(should);
      }, dependencies);

      return shouldPopulate ? autoValue : undefined;
    };
  }
}

// Create singleton instance
const autoPopulationController = new AutoPopulationController();

export default autoPopulationController;

// Export common rule creators
export const { createCommonRules } = AutoPopulationController;

// Export individual methods
export const {
  registerPopulationRules,
  shouldAutoPopulate,
  autoPopulateField,
  autoPopulateFields,
  createAutoPopulationContext,
  trackFieldHistory,
  getFieldHistory,
  clearFieldHistory
} = autoPopulationController;