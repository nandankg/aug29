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