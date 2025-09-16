import React, { useEffect, Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SideBar from "./component/SideBar";
import Header from "./component/Header";
import Login from "./pages/Login"; // Keep Login non-lazy for fast initial load
import "./App.css";
import "./pages/Style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component/Loader";

// Import the new modular route system
import { allRoutes, getRoutesByRole } from "./routes";
import { getFeatureFlag } from "./config/featureFlags";

// Legacy App component (original 3,480 lines)
import LegacyApp from "./App";

/**
 * New Modular App Component
 * Uses the new routing system with lazy-loaded modular routes
 */
function NewApp() {
  const token = localStorage.getItem("accessToken");
  const isAuthenticated = token && token !== "undefined" && token !== "null";
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get user role from localStorage or token
  const userRole = localStorage.getItem("userRole") || "Employee";

  useEffect(() => {
    const currentPath = location.pathname;

    if (
      isAuthenticated &&
      (currentPath === "/dashboard" || currentPath === "/login")
    ) {
      navigate("/dashboard");
    } else if (!isAuthenticated && currentPath !== "/login") {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, location.pathname]);

  // Get routes based on user role
  const userRoutes = isAuthenticated ? getRoutesByRole(userRole) : [];

  return (
    <div className="container-fluid m-0 p-0">
      <ToastContainer />
      <Loader />

      {!isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <div className="row pt-0">
            <SideBar />
            <Header />
            <div className="main-contain">
              <Suspense 
                fallback={
                  <div className="d-flex justify-content-center p-5">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                }
              >
                <Routes>
                  {/* Dynamic route generation from modular system */}
                  {userRoutes.map((route, index) => (
                    <Route
                      key={`${route.path}-${index}`}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
                  
                  {/* Default redirects */}
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Dual-Mode App Component
 * Toggles between legacy and new routing based on feature flags
 */
function DualModeApp() {
  // Check feature flag to determine which routing system to use
  const useNewRouting = getFeatureFlag('USE_NEW_ROUTING');
  
  // Development override - check environment variable or localStorage
  const devOverride = process.env.REACT_APP_USE_NEW_ROUTING === 'true' || 
                      localStorage.getItem('USE_NEW_ROUTING') === 'true';
  
  const shouldUseNewRouting = useNewRouting || devOverride;

  if (shouldUseNewRouting) {
    return <NewApp />;
  } else {
    return <LegacyApp />;
  }
}

/**
 * App Wrapper with Router
 * Provides BrowserRouter context and performance monitoring
 */
function AppWrapper() {
  useEffect(() => {
    // Performance monitoring for route changes
    const startTime = performance.now();
    
    const handleRouteChange = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      // Log route performance (can be sent to analytics)
      if (getFeatureFlag('PERFORMANCE_MONITORING')) {
        console.log(`Route load time: ${loadTime}ms`);
        
        // Send to analytics service if configured
        if (window.analytics && window.analytics.track) {
          window.analytics.track('Route Change', {
            path: window.location.pathname,
            loadTime: loadTime,
            timestamp: new Date().toISOString()
          });
        }
      }
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <DualModeApp />
    </BrowserRouter>
  );
}

export default AppWrapper;