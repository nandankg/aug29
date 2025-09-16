/**
 * ProtectedEditComponent - Universal edit component preventing data loss
 * Provides safe edit operations with automatic backup and restore capabilities
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFormState } from '../hooks/useFormState';
import formStateManager from '../utils/FormStateManager';

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
        alert('Please fix validation errors before saving:\\n' +
              Object.values(validationErrors).join('\\n'));
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