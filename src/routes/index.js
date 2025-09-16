/**
 * Routes Index Module
 * 
 * Master route configuration and utilities for the UPMRC application.
 * This module consolidates all route modules and provides centralized route management.
 */

import { adminRoutes, getAdminRoutesByCategory, getAdminCategories, hasAdminAccess } from './AdminRoutes';
import { employeeRoutes, getEmployeeRoutesByCategory, getEmployeeCategories, hasEmployeeAccess, getDefaultEmployeeRoute } from './EmployeeRoutes';
import { formRoutes, getFormRoutesByCategory, getFormRoutesByDeveloper, getFormCategories, getFormDevelopers } from './FormRoutes';
import { tableRoutes, getTableRoutesByCategory, getTableRoutesByDeveloper, getTableCategories, getTableDevelopers } from './TableRoutes';
import { editRoutes, getEditRoutesByCategory, getEditRoutesByDeveloper, getEditCategories, getEditDevelopers } from './EditRoutes';
import { reportRoutes, getReportRoutesByCategory, getReportRoutesByType, getReportRoutesByDeveloper, getReportCategories, getReportTypes, getReportDevelopers } from './ReportRoutes';

/**
 * All routes consolidated from different modules
 */
export const allRoutes = [
  ...adminRoutes,
  ...employeeRoutes,
  ...formRoutes,
  ...tableRoutes,
  ...editRoutes,
  ...reportRoutes
];

/**
 * Route modules export for easy access
 */
export const routeModules = {
  admin: adminRoutes,
  employee: employeeRoutes,
  forms: formRoutes,
  tables: tableRoutes,
  edit: editRoutes,
  reports: reportRoutes
};

/**
 * Get routes by user role
 */
export const getRoutesByRole = (userRole) => {
  return allRoutes.filter(route => {
    if (Array.isArray(route.requiredRole)) {
      return route.requiredRole.includes(userRole);
    }
    return route.requiredRole === userRole;
  });
};

/**
 * Get routes by category across all modules
 */
export const getRoutesByCategory = (category) => {
  return allRoutes.filter(route => route.category === category);
};

/**
 * Get routes by developer across all modules
 */
export const getRoutesByDeveloper = (developer) => {
  return allRoutes.filter(route => route.developer === developer);
};

/**
 * Get all unique categories from all route modules
 */
export const getAllCategories = () => {
  const categories = [...new Set(allRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Get all unique developers from all route modules
 */
export const getAllDevelopers = () => {
  const developers = [...new Set(allRoutes.filter(route => route.developer).map(route => route.developer))];
  return developers.map(dev => ({
    key: dev,
    label: dev.charAt(0).toUpperCase() + dev.slice(1)
  }));
};

/**
 * Find route by path
 */
export const findRouteByPath = (path) => {
  return allRoutes.find(route => route.path === path);
};

/**
 * Get routes by module type (admin, employee, forms, tables, edit, reports)
 */
export const getRoutesByModule = (moduleType) => {
  return routeModules[moduleType] || [];
};

/**
 * Check if user has access to a specific route
 */
export const hasRouteAccess = (route, userRole) => {
  if (Array.isArray(route.requiredRole)) {
    return route.requiredRole.includes(userRole);
  }
  return route.requiredRole === userRole;
};

/**
 * Get navigation menu structure organized by categories
 */
export const getNavigationMenu = (userRole) => {
  const userRoutes = getRoutesByRole(userRole);
  const categories = getAllCategories();
  
  return categories.map(category => ({
    ...category,
    routes: userRoutes.filter(route => route.category === category.key)
  })).filter(category => category.routes.length > 0);
};

/**
 * Get developer-specific navigation menu
 */
export const getDeveloperNavigationMenu = (developer, userRole) => {
  const developerRoutes = getRoutesByDeveloper(developer).filter(route => 
    hasRouteAccess(route, userRole)
  );
  
  const categories = [...new Set(developerRoutes.map(route => route.category))];
  
  return categories.map(category => ({
    key: category,
    label: category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    routes: developerRoutes.filter(route => route.category === category)
  }));
};

/**
 * Route statistics
 */
export const getRouteStatistics = () => {
  return {
    totalRoutes: allRoutes.length,
    adminRoutes: adminRoutes.length,
    employeeRoutes: employeeRoutes.length,
    formRoutes: formRoutes.length,
    tableRoutes: tableRoutes.length,
    editRoutes: editRoutes.length,
    reportRoutes: reportRoutes.length,
    categories: getAllCategories().length,
    developers: getAllDevelopers().length
  };
};

/**
 * Validate route configuration
 */
export const validateRoutes = () => {
  const errors = [];
  const paths = new Set();
  
  allRoutes.forEach(route => {
    // Check for duplicate paths
    if (paths.has(route.path)) {
      errors.push(`Duplicate path found: ${route.path}`);
    }
    paths.add(route.path);
    
    // Check required properties
    if (!route.component) {
      errors.push(`Route ${route.path} is missing component`);
    }
    if (!route.name) {
      errors.push(`Route ${route.path} is missing name`);
    }
    if (!route.category) {
      errors.push(`Route ${route.path} is missing category`);
    }
    if (!route.requiredRole) {
      errors.push(`Route ${route.path} is missing requiredRole`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Export individual route utilities for backward compatibility
export {
  // Admin routes
  adminRoutes,
  getAdminRoutesByCategory,
  getAdminCategories,
  hasAdminAccess,
  
  // Employee routes  
  employeeRoutes,
  getEmployeeRoutesByCategory,
  getEmployeeCategories,
  hasEmployeeAccess,
  getDefaultEmployeeRoute,
  
  // Form routes
  formRoutes,
  getFormRoutesByCategory,
  getFormRoutesByDeveloper,
  getFormCategories,
  getFormDevelopers,
  
  // Table routes
  tableRoutes,
  getTableRoutesByCategory,
  getTableRoutesByDeveloper,
  getTableCategories,
  getTableDevelopers,
  
  // Edit routes
  editRoutes,
  getEditRoutesByCategory,
  getEditRoutesByDeveloper,
  getEditCategories,
  getEditDevelopers,
  
  // Report routes
  reportRoutes,
  getReportRoutesByCategory,
  getReportRoutesByType,
  getReportRoutesByDeveloper,
  getReportCategories,
  getReportTypes,
  getReportDevelopers
};

export default {
  allRoutes,
  routeModules,
  getRoutesByRole,
  getRoutesByCategory,
  getRoutesByDeveloper,
  getAllCategories,
  getAllDevelopers,
  findRouteByPath,
  getRoutesByModule,
  hasRouteAccess,
  getNavigationMenu,
  getDeveloperNavigationMenu,
  getRouteStatistics,
  validateRoutes
};