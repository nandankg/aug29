# Data Integrity Protection Architecture - Implementation Guide

**Project**: UPMRC Metro Rail Operations System
**Phase**: 1 - Data Integrity Protection
**Priority**: P0 - Critical User Experience
**Timeline**: Week 1 (5 working days)
**Date**: September 15, 2025

---

## Executive Summary

This document provides detailed implementation guidance for resolving the critical data loss issues affecting 8 forms in the UPMRC system. Users are experiencing data disappearance during edit operations, auto-population conflicts, and field visibility problems that severely impact operational efficiency.

### Critical Data Loss Scenarios
1. **Form Edit Data Loss**: Data vanishes when switching to edit mode
2. **Auto-Population Conflicts**: System overwrites user input unexpectedly
3. **Field Disappearance**: Form fields become invisible during operations
4. **State Corruption**: Form state becomes inconsistent during user interactions

---

## Implementation Architecture

### Core Components Overview
```
Data Integrity Protection System
├── FormStateManager (Universal backup/restore)
├── ProtectedEditComponent (Safe edit operations)
├── AutoPopulationController (Smart auto-fill logic)
├── FieldVisibilityManager (Consistent field display)
└── SmartFormValidation (Non-destructive validation)
```

---

## Day 1: Core Data Protection System Implementation

### Task 1.1: FormStateManager Implementation

**File**: `src/utils/FormStateManager.js` (NEW FILE)

```javascript
/**
 * FormStateManager - Universal form data backup and restore system
 * Prevents data loss during edit operations and system failures
 */

class FormStateManager {
  constructor() {
    this.backupPrefix = 'upmrc_form_backup_';
    this.maxBackupAge = 24 * 60 * 60 * 1000; // 24 hours
    this.cleanupInterval = 60 * 60 * 1000; // 1 hour

    // Start automatic cleanup
    this.startAutomaticCleanup();
  }

  /**
   * Create a backup of form state before risky operations
   */
  backupFormState(formId, formData, metadata = {}) {
    try {
      const timestamp = Date.now();
      const backupKey = `${this.backupPrefix}${formId}_${timestamp}`;

      const backupData = {
        formId,
        data: formData,
        metadata: {
          ...metadata,
          timestamp: new Date().toISOString(),
          userAction: 'backup_before_edit',
          userId: this.getCurrentUserId(),
          sessionId: this.getSessionId()
        },
        version: '1.0'
      };

      // Store in localStorage for immediate access
      localStorage.setItem(backupKey, JSON.stringify(backupData));

      // Also store latest backup with predictable key for quick access
      const latestKey = `${this.backupPrefix}${formId}_latest`;
      localStorage.setItem(latestKey, JSON.stringify(backupData));

      console.log(`[FormStateManager] Backup created: ${backupKey}`);

      return backupKey;
    } catch (error) {
      console.error('[FormStateManager] Backup creation failed:', error);
      return null;
    }
  }

  /**
   * Restore form state from backup
   */
  restoreFormState(backupKey) {
    try {
      const backupData = localStorage.getItem(backupKey);

      if (!backupData) {
        console.warn(`[FormStateManager] No backup found for key: ${backupKey}`);
        return null;
      }

      const parsedData = JSON.parse(backupData);

      // Validate backup data structure
      if (!this.validateBackupData(parsedData)) {
        console.error('[FormStateManager] Invalid backup data structure');
        return null;
      }

      console.log(`[FormStateManager] State restored from: ${backupKey}`);
      return parsedData;

    } catch (error) {
      console.error('[FormStateManager] State restoration failed:', error);
      return null;
    }
  }

  /**
   * Get the latest backup for a specific form
   */
  getLatestBackup(formId) {
    const latestKey = `${this.backupPrefix}${formId}_latest`;
    return this.restoreFormState(latestKey);
  }

  /**
   * Remove specific backup
   */
  removeBackup(backupKey) {
    try {
      localStorage.removeItem(backupKey);
      console.log(`[FormStateManager] Backup removed: ${backupKey}`);
    } catch (error) {
      console.error('[FormStateManager] Backup removal failed:', error);
    }
  }

  /**
   * Clean up old backups to prevent localStorage overflow
   */
  cleanupOldBackups() {
    try {
      const keys = Object.keys(localStorage);
      const backupKeys = keys.filter(key => key.startsWith(this.backupPrefix));
      const cutoffTime = Date.now() - this.maxBackupAge;
      let cleanedCount = 0;

      backupKeys.forEach(key => {
        try {
          // Skip latest backups
          if (key.includes('_latest')) return;

          const backup = JSON.parse(localStorage.getItem(key));
          const backupTime = new Date(backup.metadata.timestamp).getTime();

          if (backupTime < cutoffTime) {
            localStorage.removeItem(key);
            cleanedCount++;
          }
        } catch (error) {
          // Remove corrupted backups
          localStorage.removeItem(key);
          cleanedCount++;
        }
      });

      if (cleanedCount > 0) {
        console.log(`[FormStateManager] Cleaned up ${cleanedCount} old backups`);
      }
    } catch (error) {
      console.error('[FormStateManager] Cleanup failed:', error);
    }
  }

  /**
   * Start automatic cleanup process
   */
  startAutomaticCleanup() {
    setInterval(() => {
      this.cleanupOldBackups();
    }, this.cleanupInterval);
  }

  /**
   * Validate backup data structure
   */
  validateBackupData(data) {
    return data &&
           typeof data === 'object' &&
           data.formId &&
           data.data &&
           data.metadata &&
           data.metadata.timestamp;
  }

  /**
   * Get current user ID from application state
   */
  getCurrentUserId() {
    try {
      // Try to get from Redux store or localStorage
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        return user.id || user.empId || 'unknown';
      }
      return 'unknown';
    } catch {
      return 'unknown';
    }
  }

  /**
   * Get current session ID
   */
  getSessionId() {
    let sessionId = sessionStorage.getItem('upmrc_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('upmrc_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Get backup statistics
   */
  getBackupStats() {
    const keys = Object.keys(localStorage);
    const backupKeys = keys.filter(key => key.startsWith(this.backupPrefix));

    return {
      totalBackups: backupKeys.length,
      latestBackups: backupKeys.filter(key => key.includes('_latest')).length,
      oldestBackup: this.getOldestBackupDate(backupKeys),
      storageUsed: this.calculateStorageUsage(backupKeys)
    };
  }

  /**
   * Calculate storage usage by backups
   */
  calculateStorageUsage(backupKeys) {
    let totalSize = 0;
    backupKeys.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) {
        totalSize += new Blob([value]).size;
      }
    });
    return totalSize;
  }

  /**
   * Get oldest backup date
   */
  getOldestBackupDate(backupKeys) {
    let oldestDate = null;

    backupKeys.forEach(key => {
      if (key.includes('_latest')) return;

      try {
        const backup = JSON.parse(localStorage.getItem(key));
        const backupDate = new Date(backup.metadata.timestamp);

        if (!oldestDate || backupDate < oldestDate) {
          oldestDate = backupDate;
        }
      } catch (error) {
        // Ignore corrupted backups
      }
    });

    return oldestDate;
  }
}

// Create singleton instance
const formStateManager = new FormStateManager();

export default formStateManager;

// Named exports for specific functions
export const {
  backupFormState,
  restoreFormState,
  getLatestBackup,
  removeBackup,
  cleanupOldBackups,
  getBackupStats
} = formStateManager;
```

### Task 1.2: Enhanced useFormState Hook

**File**: `src/hooks/useFormState.js` (NEW FILE)

```javascript
/**
 * useFormState Hook - Centralized form state management with data protection
 * Provides safe form state operations with automatic backup and restore
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import formStateManager from '../utils/FormStateManager';

export const useFormState = (initialData = {}, formId, options = {}) => {
  const {
    autoBackup = true,
    backupOnChange = false,
    validateOnChange = true,
    enableUnsavedWarning = true
  } = options;

  // Core state
  const [formData, setFormData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Backup tracking
  const [currentBackupKey, setCurrentBackupKey] = useState(null);
  const originalDataRef = useRef(initialData);
  const lastSavedDataRef = useRef(initialData);

  // Track user modifications for smart auto-population
  const [userModifiedFields, setUserModifiedFields] = useState(new Set());

  /**
   * Enter edit mode with automatic backup
   */
  const enterEditMode = useCallback(() => {
    if (!editMode && autoBackup) {
      const backupKey = formStateManager.backupFormState(
        formId,
        formData,
        { action: 'enter_edit_mode' }
      );
      setCurrentBackupKey(backupKey);
    }

    setEditMode(true);
    originalDataRef.current = { ...formData };
  }, [editMode, autoBackup, formId, formData]);

  /**
   * Exit edit mode with optional restore
   */
  const exitEditMode = useCallback((shouldRestore = false) => {
    if (shouldRestore && currentBackupKey) {
      const backup = formStateManager.restoreFormState(currentBackupKey);
      if (backup) {
        setFormData(backup.data);
        setHasUnsavedChanges(false);
        setUserModifiedFields(new Set());
      }
    }

    setEditMode(false);

    // Clean up backup if no longer needed
    if (currentBackupKey && !shouldRestore) {
      formStateManager.removeBackup(currentBackupKey);
    }
    setCurrentBackupKey(null);
  }, [currentBackupKey]);

  /**
   * Update form field with validation and change tracking
   */
  const updateField = useCallback((fieldName, value, options = {}) => {
    const {
      skipValidation = false,
      skipChangeTracking = false,
      isAutoPopulation = false
    } = options;

    setFormData(prevData => {
      const newData = { ...prevData, [fieldName]: value };

      // Create backup on significant changes if enabled
      if (backupOnChange && !isAutoPopulation) {
        formStateManager.backupFormState(
          formId,
          newData,
          { action: 'field_update', field: fieldName }
        );
      }

      return newData;
    });

    // Track user modifications (not auto-population)
    if (!skipChangeTracking && !isAutoPopulation) {
      setUserModifiedFields(prev => new Set([...prev, fieldName]));
      setHasUnsavedChanges(true);
    }

    // Validate field if enabled
    if (validateOnChange && !skipValidation && options.validator) {
      const error = options.validator(value);
      setValidationErrors(prev => ({
        ...prev,
        [fieldName]: error
      }));
    }
  }, [backupOnChange, formId, validateOnChange]);

  /**
   * Update multiple fields at once
   */
  const updateFields = useCallback((updates, options = {}) => {
    const { skipValidation = false, isAutoPopulation = false } = options;

    setFormData(prevData => {
      const newData = { ...prevData, ...updates };

      if (backupOnChange && !isAutoPopulation) {
        formStateManager.backupFormState(
          formId,
          newData,
          { action: 'bulk_update', fields: Object.keys(updates) }
        );
      }

      return newData;
    });

    // Track user modifications
    if (!isAutoPopulation) {
      setUserModifiedFields(prev => {
        const newSet = new Set(prev);
        Object.keys(updates).forEach(field => newSet.add(field));
        return newSet;
      });
      setHasUnsavedChanges(true);
    }

    // Validate fields if enabled
    if (validateOnChange && !skipValidation && options.validators) {
      const newErrors = {};
      Object.entries(updates).forEach(([field, value]) => {
        if (options.validators[field]) {
          const error = options.validators[field](value);
          if (error) newErrors[field] = error;
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setValidationErrors(prev => ({ ...prev, ...newErrors }));
      }
    }
  }, [backupOnChange, formId, validateOnChange]);

  /**
   * Reset form to original state
   */
  const resetForm = useCallback(() => {
    setFormData(originalDataRef.current);
    setHasUnsavedChanges(false);
    setUserModifiedFields(new Set());
    setValidationErrors({});
  }, []);

  /**
   * Mark form as saved
   */
  const markAsSaved = useCallback(() => {
    setHasUnsavedChanges(false);
    lastSavedDataRef.current = { ...formData };

    // Clean up backup after successful save
    if (currentBackupKey) {
      formStateManager.removeBackup(currentBackupKey);
      setCurrentBackupKey(null);
    }
  }, [formData, currentBackupKey]);

  /**
   * Check if field has been modified by user
   */
  const isFieldModifiedByUser = useCallback((fieldName) => {
    return userModifiedFields.has(fieldName);
  }, [userModifiedFields]);

  /**
   * Get form context for other components
   */
  const getFormContext = useCallback(() => {
    return {
      editMode,
      hasUnsavedChanges,
      userModifiedFields: Array.from(userModifiedFields),
      isFieldModified: isFieldModifiedByUser,
      validationErrors,
      isLoading
    };
  }, [editMode, hasUnsavedChanges, userModifiedFields, isFieldModifiedByUser, validationErrors, isLoading]);

  /**
   * Browser unload warning for unsaved changes
   */
  useEffect(() => {
    if (!enableUnsavedWarning) return;

    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges, enableUnsavedWarning]);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (currentBackupKey) {
        // Keep backup for a short time in case of accidental navigation
        setTimeout(() => {
          formStateManager.removeBackup(currentBackupKey);
        }, 5 * 60 * 1000); // 5 minutes
      }
    };
  }, [currentBackupKey]);

  return {
    // State
    formData,
    editMode,
    hasUnsavedChanges,
    validationErrors,
    isLoading,
    setIsLoading,

    // Actions
    updateField,
    updateFields,
    enterEditMode,
    exitEditMode,
    resetForm,
    markAsSaved,

    // Utilities
    isFieldModifiedByUser,
    getFormContext,

    // Direct state setters (use with caution)
    setFormData,
    setValidationErrors
  };
};

export default useFormState;
```

---

## Day 2: Protected Edit Component System

### Task 2.1: ProtectedEditComponent Implementation

**File**: `src/components/ProtectedEditComponent.jsx` (NEW FILE)

```javascript
/**
 * ProtectedEditComponent - Universal edit component preventing data loss
 * Provides safe edit operations with automatic backup and restore capabilities
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFormState } from '../hooks/useFormState';
import formStateManager from '../utils/FormStateManager';
import './ProtectedEditComponent.css';

const ProtectedEditComponent = ({
  formId,
  initialData,
  onSave,
  onCancel,
  onDataChange,
  children,
  renderEditForm,
  renderViewForm,
  validation = {},
  autoSave = false,
  autoSaveInterval = 30000, // 30 seconds
  className = '',
  disabled = false
}) => {
  const {
    formData,
    editMode,
    hasUnsavedChanges,
    validationErrors,
    isLoading,
    updateField,
    updateFields,
    enterEditMode,
    exitEditMode,
    markAsSaved,
    getFormContext,
    setIsLoading
  } = useFormState(initialData, formId, {
    autoBackup: true,
    backupOnChange: true,
    validateOnChange: true,
    enableUnsavedWarning: true
  });

  // Auto-save functionality
  const [autoSaveTimer, setAutoSaveTimer] = useState(null);

  /**
   * Handle entering edit mode
   */
  const handleEditStart = useCallback(() => {
    if (disabled) return;

    enterEditMode();

    // Start auto-save if enabled
    if (autoSave) {
      const timer = setInterval(() => {
        if (hasUnsavedChanges) {
          handleSave(true); // Silent auto-save
        }
      }, autoSaveInterval);
      setAutoSaveTimer(timer);
    }
  }, [disabled, enterEditMode, autoSave, autoSaveInterval, hasUnsavedChanges]);

  /**
   * Handle saving form data
   */
  const handleSave = useCallback(async (isAutoSave = false) => {
    if (!onSave) {
      console.warn('[ProtectedEditComponent] No onSave handler provided');
      return;
    }

    // Validate all fields before saving
    const validationErrors = {};
    Object.entries(validation).forEach(([field, validator]) => {
      const error = validator(formData[field]);
      if (error) {
        validationErrors[field] = error;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      if (!isAutoSave) {
        alert('Please fix validation errors before saving:\n' +
              Object.values(validationErrors).join('\n'));
      }
      return;
    }

    setIsLoading(true);

    try {
      const saveResult = await onSave(formData, { isAutoSave });

      if (saveResult && saveResult.success !== false) {
        markAsSaved();

        if (!isAutoSave) {
          exitEditMode(false); // Don't restore, keep saved data

          // Notify parent of data change
          if (onDataChange) {
            onDataChange(formData);
          }
        }

        if (!isAutoSave) {
          // Show success message
          console.log('[ProtectedEditComponent] Data saved successfully');
        }
      } else {
        const errorMessage = saveResult?.message || 'Save failed due to unknown error';
        if (!isAutoSave) {
          alert('Save failed: ' + errorMessage);
        }
        console.error('[ProtectedEditComponent] Save failed:', errorMessage);
      }
    } catch (error) {
      console.error('[ProtectedEditComponent] Save error:', error);
      if (!isAutoSave) {
        alert('Save failed due to system error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [onSave, validation, formData, markAsSaved, exitEditMode, onDataChange, setIsLoading]);

  /**
   * Handle canceling edit
   */
  const handleCancel = useCallback(() => {
    let shouldCancel = true;

    // Confirm if there are unsaved changes
    if (hasUnsavedChanges) {
      shouldCancel = window.confirm(
        'You have unsaved changes. Do you want to discard them?'
      );
    }

    if (shouldCancel) {
      // Clear auto-save timer
      if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
        setAutoSaveTimer(null);
      }

      exitEditMode(true); // Restore from backup

      // Notify parent
      if (onCancel) {
        onCancel();
      }
    }
  }, [hasUnsavedChanges, autoSaveTimer, exitEditMode, onCancel]);

  /**
   * Handle field changes
   */
  const handleFieldChange = useCallback((fieldName, value, options = {}) => {
    updateField(fieldName, value, {
      validator: validation[fieldName],
      ...options
    });
  }, [updateField, validation]);

  /**
   * Handle bulk field changes
   */
  const handleFieldsChange = useCallback((updates, options = {}) => {
    updateFields(updates, {
      validators: validation,
      ...options
    });
  }, [updateFields, validation]);

  /**
   * Cleanup auto-save timer on unmount
   */
  useEffect(() => {
    return () => {
      if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
      }
    };
  }, [autoSaveTimer]);

  /**
   * Default edit form renderer
   */
  const defaultEditForm = () => (
    <div className="protected-edit-form">
      <div className="form-status">
        {isLoading && <div className="loading-indicator">Saving...</div>}
        {hasUnsavedChanges && !isLoading && (
          <div className="unsaved-indicator">Unsaved changes</div>
        )}
        {autoSave && hasUnsavedChanges && (
          <div className="autosave-indicator">Auto-save enabled</div>
        )}
      </div>

      <div className="form-content">
        {children}
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={() => handleSave(false)}
          disabled={isLoading || Object.keys(validationErrors).length > 0}
          className="btn btn-primary"
        >
          {isLoading ? 'Saving...' : 'Save'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={isLoading}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>

      {Object.keys(validationErrors).length > 0 && (
        <div className="validation-errors">
          <h4>Please fix the following errors:</h4>
          <ul>
            {Object.entries(validationErrors).map(([field, error]) => (
              <li key={field}>{field}: {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  /**
   * Default view form renderer
   */
  const defaultViewForm = () => (
    <div className="protected-view-form">
      <div className="form-content">
        {children}
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={handleEditStart}
          disabled={disabled}
          className="btn btn-primary"
        >
          Edit
        </button>
      </div>
    </div>
  );

  // Enhanced form context for child components
  const enhancedFormContext = {
    ...getFormContext(),
    formData,
    onFieldChange: handleFieldChange,
    onFieldsChange: handleFieldsChange,
    onSave: () => handleSave(false),
    onCancel: handleCancel
  };

  return (
    <div className={`protected-edit-component ${className}`}>
      {editMode ? (
        renderEditForm ?
          renderEditForm(enhancedFormContext) :
          defaultEditForm()
      ) : (
        renderViewForm ?
          renderViewForm(enhancedFormContext) :
          defaultViewForm()
      )}
    </div>
  );
};

ProtectedEditComponent.propTypes = {
  formId: PropTypes.string.isRequired,
  initialData: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onDataChange: PropTypes.func,
  children: PropTypes.node,
  renderEditForm: PropTypes.func,
  renderViewForm: PropTypes.func,
  validation: PropTypes.object,
  autoSave: PropTypes.bool,
  autoSaveInterval: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default ProtectedEditComponent;
```

### Task 2.2: Field Visibility Manager

**File**: `src/utils/FieldVisibilityManager.js` (NEW FILE)

```javascript
/**
 * FieldVisibilityManager - Prevents field disappearance during edit operations
 * Manages dynamic field visibility with state-aware logic
 */

class FieldVisibilityManager {
  constructor() {
    this.visibilityRules = new Map();
    this.fieldStates = new Map();
    this.debugMode = process.env.NODE_ENV === 'development';
  }

  /**
   * Register visibility rules for a form
   */
  registerVisibilityRules(formId, rules) {
    this.visibilityRules.set(formId, rules);

    if (this.debugMode) {
      console.log(`[FieldVisibilityManager] Registered rules for ${formId}:`, rules);
    }
  }

  /**
   * Determine if a field should be visible
   */
  isFieldVisible(formId, fieldName, context = {}) {
    const rules = this.visibilityRules.get(formId);

    if (!rules || !rules[fieldName]) {
      // Default to visible if no rules defined
      return true;
    }

    const rule = rules[fieldName];

    // Handle different rule types
    if (typeof rule === 'boolean') {
      return rule;
    }

    if (typeof rule === 'function') {
      try {
        return rule(context);
      } catch (error) {
        console.error(`[FieldVisibilityManager] Rule evaluation error for ${fieldName}:`, error);
        return true; // Default to visible on error
      }
    }

    if (typeof rule === 'object') {
      return this.evaluateComplexRule(rule, context);
    }

    return true;
  }

  /**
   * Evaluate complex visibility rules
   */
  evaluateComplexRule(rule, context) {
    const {
      showIf,
      hideIf,
      showInEditMode,
      hideInEditMode,
      dependsOn,
      conditions
    } = rule;

    // Edit mode specific rules
    if (context.editMode !== undefined) {
      if (showInEditMode !== undefined) {
        return context.editMode === showInEditMode;
      }
      if (hideInEditMode !== undefined) {
        return context.editMode !== hideInEditMode;
      }
    }

    // Dependency-based rules
    if (dependsOn && context.formData) {
      const dependentFieldValue = context.formData[dependsOn.field];

      if (dependsOn.equals !== undefined) {
        return dependentFieldValue === dependsOn.equals;
      }

      if (dependsOn.notEquals !== undefined) {
        return dependentFieldValue !== dependsOn.notEquals;
      }

      if (dependsOn.in && Array.isArray(dependsOn.in)) {
        return dependsOn.in.includes(dependentFieldValue);
      }

      if (dependsOn.notIn && Array.isArray(dependsOn.notIn)) {
        return !dependsOn.notIn.includes(dependentFieldValue);
      }
    }

    // Condition-based rules
    if (conditions && Array.isArray(conditions)) {
      return conditions.every(condition => this.evaluateCondition(condition, context));
    }

    // Simple show/hide rules
    if (showIf !== undefined) {
      return this.evaluateCondition(showIf, context);
    }

    if (hideIf !== undefined) {
      return !this.evaluateCondition(hideIf, context);
    }

    return true;
  }

  /**
   * Evaluate a single condition
   */
  evaluateCondition(condition, context) {
    if (typeof condition === 'boolean') {
      return condition;
    }

    if (typeof condition === 'function') {
      return condition(context);
    }

    if (typeof condition === 'object') {
      const { field, operator, value } = condition;

      if (!field || !operator) {
        return true;
      }

      const fieldValue = context.formData?.[field];

      switch (operator) {
        case 'equals':
        case '==':
          return fieldValue === value;
        case 'notEquals':
        case '!=':
          return fieldValue !== value;
        case 'greaterThan':
        case '>':
          return Number(fieldValue) > Number(value);
        case 'lessThan':
        case '<':
          return Number(fieldValue) < Number(value);
        case 'greaterOrEqual':
        case '>=':
          return Number(fieldValue) >= Number(value);
        case 'lessOrEqual':
        case '<=':
          return Number(fieldValue) <= Number(value);
        case 'contains':
          return String(fieldValue).includes(String(value));
        case 'startsWith':
          return String(fieldValue).startsWith(String(value));
        case 'endsWith':
          return String(fieldValue).endsWith(String(value));
        case 'isEmpty':
          return !fieldValue || fieldValue === '';
        case 'isNotEmpty':
          return fieldValue && fieldValue !== '';
        default:
          console.warn(`[FieldVisibilityManager] Unknown operator: ${operator}`);
          return true;
      }
    }

    return true;
  }

  /**
   * Get all visible fields for a form
   */
  getVisibleFields(formId, context = {}) {
    const rules = this.visibilityRules.get(formId);

    if (!rules) {
      return null; // All fields visible by default
    }

    const visibleFields = {};

    Object.keys(rules).forEach(fieldName => {
      visibleFields[fieldName] = this.isFieldVisible(formId, fieldName, context);
    });

    return visibleFields;
  }

  /**
   * Update field state tracking
   */
  updateFieldState(formId, fieldName, state) {
    const formKey = `${formId}_${fieldName}`;
    this.fieldStates.set(formKey, {
      ...this.fieldStates.get(formKey),
      ...state,
      lastUpdated: Date.now()
    });
  }

  /**
   * Get field state
   */
  getFieldState(formId, fieldName) {
    const formKey = `${formId}_${fieldName}`;
    return this.fieldStates.get(formKey) || {};
  }

  /**
   * Clear field states for a form
   */
  clearFieldStates(formId) {
    const keysToDelete = [];

    this.fieldStates.forEach((value, key) => {
      if (key.startsWith(`${formId}_`)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.fieldStates.delete(key));
  }

  /**
   * Create a React hook for field visibility
   */
  createVisibilityHook() {
    return (formId, fieldName, dependencies = []) => {
      const [isVisible, setIsVisible] = React.useState(true);

      React.useEffect(() => {
        // This would need to be integrated with form context
        // Implementation depends on how form context is structured
        const checkVisibility = () => {
          const context = this.getFormContext?.(formId) || {};
          const visible = this.isFieldVisible(formId, fieldName, context);
          setIsVisible(visible);
        };

        checkVisibility();
      }, dependencies);

      return isVisible;
    };
  }

  /**
   * Create visibility rules for common patterns
   */
  static createCommonRules() {
    return {
      // Hide in edit mode
      hideInEdit: (fieldName) => ({
        [fieldName]: { hideInEditMode: true }
      }),

      // Show only in edit mode
      showOnlyInEdit: (fieldName) => ({
        [fieldName]: { showInEditMode: true }
      }),

      // Conditional visibility based on another field
      showWhen: (fieldName, dependentField, value) => ({
        [fieldName]: {
          dependsOn: { field: dependentField, equals: value }
        }
      }),

      // Hide when another field has specific value
      hideWhen: (fieldName, dependentField, value) => ({
        [fieldName]: {
          dependsOn: { field: dependentField, notEquals: value }
        }
      }),

      // Show when field is not empty
      showWhenNotEmpty: (fieldName, dependentField) => ({
        [fieldName]: {
          dependsOn: { field: dependentField, notEquals: '' }
        }
      })
    };
  }
}

// Create singleton instance
const fieldVisibilityManager = new FieldVisibilityManager();

export default fieldVisibilityManager;

// Export common rule creators
export const { createCommonRules } = FieldVisibilityManager;

// Export individual methods
export const {
  registerVisibilityRules,
  isFieldVisible,
  getVisibleFields,
  updateFieldState,
  getFieldState,
  clearFieldStates
} = fieldVisibilityManager;
```

---

## Day 3: Auto-Population Control System

### Task 3.1: AutoPopulationController Implementation

**File**: `src/utils/AutoPopulationController.js` (NEW FILE)

```javascript
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
```

---

This documentation continues with implementation details for Days 4-5, testing procedures, and deployment instructions. The architecture provides comprehensive data protection through:

1. **FormStateManager**: Automatic backup and restore capabilities
2. **useFormState Hook**: Centralized state management with protection
3. **ProtectedEditComponent**: Universal safe edit operations
4. **FieldVisibilityManager**: Prevents field disappearance
5. **AutoPopulationController**: Intelligent auto-population logic

Each component is designed to work together to eliminate the 8 critical data loss scenarios affecting user productivity in the UPMRC system.