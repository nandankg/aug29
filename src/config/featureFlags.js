/**
 * Feature Flag System for UPMRC Application
 * 
 * This system provides runtime toggles for safe deployment and testing
 * of new features, particularly the routing system migration.
 */

// Feature flag keys
export const FEATURE_FLAGS = {
  // Core routing migration flags
  USE_NEW_ROUTING: 'USE_NEW_ROUTING',
  ENABLE_BUNDLE_SPLITTING: 'ENABLE_BUNDLE_SPLITTING',
  
  // Performance monitoring flags
  PERFORMANCE_MONITORING: 'PERFORMANCE_MONITORING',
  BUNDLE_SIZE_MONITORING: 'BUNDLE_SIZE_MONITORING',
  ROUTE_LOAD_TRACKING: 'ROUTE_LOAD_TRACKING',
  
  // User experience flags
  ENHANCED_ERROR_REPORTING: 'ENHANCED_ERROR_REPORTING',
  DEBUG_MODE: 'DEBUG_MODE',
  
  // Component optimization flags
  OPTIMIZED_COMPONENTS: 'OPTIMIZED_COMPONENTS',
  LAZY_LOADING: 'LAZY_LOADING',
  
  // Development flags
  DEV_TOOLS: 'DEV_TOOLS',
  MOCK_DATA: 'MOCK_DATA'
};

// Default feature flag values
const DEFAULT_FLAGS = {
  [FEATURE_FLAGS.USE_NEW_ROUTING]: false,
  [FEATURE_FLAGS.ENABLE_BUNDLE_SPLITTING]: false,
  [FEATURE_FLAGS.PERFORMANCE_MONITORING]: true,
  [FEATURE_FLAGS.BUNDLE_SIZE_MONITORING]: process.env.NODE_ENV === 'development',
  [FEATURE_FLAGS.ROUTE_LOAD_TRACKING]: true,
  [FEATURE_FLAGS.ENHANCED_ERROR_REPORTING]: true,
  [FEATURE_FLAGS.DEBUG_MODE]: process.env.NODE_ENV === 'development',
  [FEATURE_FLAGS.OPTIMIZED_COMPONENTS]: false,
  [FEATURE_FLAGS.LAZY_LOADING]: true,
  [FEATURE_FLAGS.DEV_TOOLS]: process.env.NODE_ENV === 'development',
  [FEATURE_FLAGS.MOCK_DATA]: false
};

// User-based feature flag overrides
const USER_OVERRIDES = {
  // Admin users get new features first
  admin: {
    [FEATURE_FLAGS.USE_NEW_ROUTING]: false, // Will be enabled for gradual rollout
    [FEATURE_FLAGS.OPTIMIZED_COMPONENTS]: true,
    [FEATURE_FLAGS.ENHANCED_ERROR_REPORTING]: true
  },
  
  // Beta users for testing
  beta: {
    [FEATURE_FLAGS.USE_NEW_ROUTING]: false,
    [FEATURE_FLAGS.ENABLE_BUNDLE_SPLITTING]: true,
    [FEATURE_FLAGS.PERFORMANCE_MONITORING]: true
  },
  
  // Regular employees
  employee: {
    [FEATURE_FLAGS.USE_NEW_ROUTING]: false,
    [FEATURE_FLAGS.PERFORMANCE_MONITORING]: false
  }
};

// Percentage-based rollout configuration
const ROLLOUT_PERCENTAGES = {
  [FEATURE_FLAGS.USE_NEW_ROUTING]: {
    admin: 0,    // 0% of admin users
    beta: 0,     // 0% of beta users  
    employee: 0  // 0% of employees
  },
  [FEATURE_FLAGS.OPTIMIZED_COMPONENTS]: {
    admin: 100,  // 100% of admin users
    beta: 50,    // 50% of beta users
    employee: 0  // 0% of employees
  }
};

/**
 * Get feature flag value with fallbacks
 */
function getFeatureFlag(flagKey, userType = 'employee', userId = null) {
  try {
    // 1. Check localStorage for manual overrides (development/testing)
    const localOverride = localStorage.getItem(`ff_${flagKey}`);
    if (localOverride !== null) {
      return localOverride === 'true';
    }

    // 2. Check URL parameters for quick testing
    const urlParams = new URLSearchParams(window.location.search);
    const urlOverride = urlParams.get(`ff_${flagKey}`);
    if (urlOverride !== null) {
      const value = urlOverride === 'true';
      // Optionally save to localStorage for session persistence
      if (process.env.NODE_ENV === 'development') {
        localStorage.setItem(`ff_${flagKey}`, value.toString());
      }
      return value;
    }

    // 3. Check user-based overrides
    if (USER_OVERRIDES[userType] && USER_OVERRIDES[userType][flagKey] !== undefined) {
      return USER_OVERRIDES[userType][flagKey];
    }

    // 4. Check percentage-based rollout
    if (ROLLOUT_PERCENTAGES[flagKey] && ROLLOUT_PERCENTAGES[flagKey][userType] !== undefined) {
      const percentage = ROLLOUT_PERCENTAGES[flagKey][userType];
      if (percentage === 0) return false;
      if (percentage === 100) return true;
      
      // Use userId or session-based hash for consistent behavior
      const hash = userId ? simpleHash(userId) : simpleHash(getSessionId());
      return (hash % 100) < percentage;
    }

    // 5. Fall back to default
    return DEFAULT_FLAGS[flagKey] || false;
    
  } catch (error) {
    console.warn(`Error getting feature flag ${flagKey}:`, error);
    return DEFAULT_FLAGS[flagKey] || false;
  }
}

/**
 * Set feature flag value (for testing/development)
 */
function setFeatureFlag(flagKey, value, persist = true) {
  if (process.env.NODE_ENV !== 'development') {
    console.warn('Feature flag setting is only allowed in development mode');
    return;
  }
  
  if (persist) {
    localStorage.setItem(`ff_${flagKey}`, value.toString());
  }
  
  // Emit custom event for components to react to changes
  window.dispatchEvent(new CustomEvent('featureFlagChanged', {
    detail: { flagKey, value }
  }));
}

/**
 * Clear all feature flag overrides
 */
function clearFeatureFlags() {
  Object.values(FEATURE_FLAGS).forEach(flagKey => {
    localStorage.removeItem(`ff_${flagKey}`);
  });
  
  window.dispatchEvent(new CustomEvent('featureFlagsCleared'));
}

/**
 * Get all active feature flags for debugging
 */
function getAllFeatureFlags(userType = 'employee', userId = null) {
  const flags = {};
  Object.values(FEATURE_FLAGS).forEach(flagKey => {
    flags[flagKey] = getFeatureFlag(flagKey, userType, userId);
  });
  return flags;
}

/**
 * Simple hash function for consistent percentage rollouts
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Get or create session ID for consistent rollouts
 */
function getSessionId() {
  let sessionId = sessionStorage.getItem('ff_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('ff_session_id', sessionId);
  }
  return sessionId;
}

/**
 * Update rollout percentage for a feature flag
 */
function updateRolloutPercentage(flagKey, userType, percentage) {
  if (process.env.NODE_ENV !== 'development') {
    console.warn('Rollout percentage updates are only allowed in development mode');
    return;
  }
  
  if (!ROLLOUT_PERCENTAGES[flagKey]) {
    ROLLOUT_PERCENTAGES[flagKey] = {};
  }
  
  ROLLOUT_PERCENTAGES[flagKey][userType] = Math.max(0, Math.min(100, percentage));
  
  console.log(`Updated ${flagKey} rollout for ${userType}: ${percentage}%`);
}

/**
 * Feature flag hook for React components
 */
export function useFeatureFlag(flagKey, userType = 'employee', userId = null) {
  const [isEnabled, setIsEnabled] = React.useState(() => 
    getFeatureFlag(flagKey, userType, userId)
  );

  React.useEffect(() => {
    const handleFlagChange = (event) => {
      if (event.detail.flagKey === flagKey) {
        setIsEnabled(event.detail.value);
      }
    };

    const handleFlagsCleared = () => {
      setIsEnabled(getFeatureFlag(flagKey, userType, userId));
    };

    window.addEventListener('featureFlagChanged', handleFlagChange);
    window.addEventListener('featureFlagsCleared', handleFlagsCleared);

    return () => {
      window.removeEventListener('featureFlagChanged', handleFlagChange);
      window.removeEventListener('featureFlagsCleared', handleFlagsCleared);
    };
  }, [flagKey, userType, userId]);

  return isEnabled;
}

/**
 * Development tools for feature flag management
 */
export const FeatureFlagDevTools = {
  // Get current user info (mock for now)
  getCurrentUser: () => ({
    type: localStorage.getItem('userType') || 'employee',
    id: localStorage.getItem('userId') || 'anonymous'
  }),

  // Enable new routing for current user
  enableNewRouting: () => setFeatureFlag(FEATURE_FLAGS.USE_NEW_ROUTING, true),
  
  // Disable new routing for current user
  disableNewRouting: () => setFeatureFlag(FEATURE_FLAGS.USE_NEW_ROUTING, false),
  
  // Toggle performance monitoring
  togglePerformanceMonitoring: () => {
    const current = getFeatureFlag(FEATURE_FLAGS.PERFORMANCE_MONITORING);
    setFeatureFlag(FEATURE_FLAGS.PERFORMANCE_MONITORING, !current);
  },
  
  // Set user type for testing
  setUserType: (userType) => {
    localStorage.setItem('userType', userType);
    console.log(`User type set to: ${userType}`);
    window.location.reload(); // Reload to apply changes
  },
  
  // Show all active flags
  showActiveFlags: () => {
    const user = FeatureFlagDevTools.getCurrentUser();
    const flags = getAllFeatureFlags(user.type, user.id);
    console.table(flags);
    return flags;
  },
  
  // Gradual rollout controls
  startGradualRollout: (flagKey, targetPercentage = 5) => {
    console.log(`Starting gradual rollout for ${flagKey}`);
    updateRolloutPercentage(flagKey, 'admin', targetPercentage);
    updateRolloutPercentage(flagKey, 'beta', Math.floor(targetPercentage / 2));
  },
  
  // Emergency rollback
  emergencyRollback: (flagKey) => {
    console.warn(`Emergency rollback initiated for ${flagKey}`);
    updateRolloutPercentage(flagKey, 'admin', 0);
    updateRolloutPercentage(flagKey, 'beta', 0);
    updateRolloutPercentage(flagKey, 'employee', 0);
    setFeatureFlag(flagKey, false);
  }
};

// Export main API
export default {
  getFeatureFlag,
  setFeatureFlag,
  clearFeatureFlags,
  getAllFeatureFlags,
  updateRolloutPercentage,
  useFeatureFlag,
  FeatureFlagDevTools,
  FEATURE_FLAGS
};

// Global development helpers
if (process.env.NODE_ENV === 'development') {
  // Make feature flags available in console
  window.FeatureFlags = {
    ...FeatureFlagDevTools,
    getFlag: getFeatureFlag,
    setFlag: setFeatureFlag,
    FLAGS: FEATURE_FLAGS
  };
  
  // Log initial state
  console.log('🎛️  Feature Flags initialized. Use window.FeatureFlags for dev tools.');
  console.log('📊 Current flags:', FeatureFlagDevTools.showActiveFlags());
}