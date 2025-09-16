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