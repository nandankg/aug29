/**
 * Employee Routes Module
 * 
 * Contains all employee-accessible routes for the UPMRC application.
 * These routes are available to regular employees for operational tasks.
 */

import { lazy } from 'react';

// Employee dashboard and basic components
const Home = lazy(() => import("../pages/Home"));
const ViewAccount = lazy(() => import("../component/ViewAccount"));

/**
 * Employee routes configuration
 * These routes are accessible to both employees and admins
 */
export const employeeRoutes = [
  // Home and Basic Interface
  {
    path: "/",
    component: Home,
    name: "Home",
    category: "main",
    requiredRole: ["Employee", "Admin"],
    isDefault: true
  },
  {
    path: "/home",
    component: Home,
    name: "Home",
    category: "main",
    requiredRole: ["Employee", "Admin"]
  },

  // Account Management
  {
    path: "/view-account",
    component: ViewAccount,
    name: "View Account",
    category: "account",
    requiredRole: ["Employee", "Admin"]
  }
];

/**
 * Get employee routes by category
 */
export const getEmployeeRoutesByCategory = (category) => {
  return employeeRoutes.filter(route => route.category === category);
};

/**
 * Get all employee route categories
 */
export const getEmployeeCategories = () => {
  const categories = [...new Set(employeeRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Check if user has access to employee routes
 */
export const hasEmployeeAccess = (userRole) => {
  return userRole === 'Employee' || userRole === 'Admin';
};

/**
 * Get default route for employees
 */
export const getDefaultEmployeeRoute = () => {
  return employeeRoutes.find(route => route.isDefault) || employeeRoutes[0];
};

export default employeeRoutes;