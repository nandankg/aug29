/**
 * Report Routes Module
 * 
 * Contains all reporting and analytics routes for the UPMRC application.
 * This module handles report generation, failure reports, and incident analytics.
 */

import { lazy } from 'react';

// Report components
const FailureReport = lazy(() => import("../forms/chanchal/FailureReport"));
const FailureReportEdit = lazy(() => import("../edit/chanchal/FailureReportEdit"));
const FailureReportList = lazy(() => import("../tables/chanchal/FailureReportList"));
const FailureReport_NewList = lazy(() => import("../list/chanchal/FailureReport_NewList"));

// Incident Report components
const IncidentAccidentReportReg = lazy(() => import("../forms/pinki/IncidentAccidentReportReg"));
const EditIncidentReport = lazy(() => import("../edit/pinki/EditIncidentReport"));
const IncidentAccidentReportList = lazy(() => import("../tables/pinki/IncidentAccidentReportList"));

/**
 * Report routes configuration
 * Organized by report type and functionality
 */
export const reportRoutes = [
  // Failure Reports - Chanchal's module
  {
    path: "/reports/failure-report",
    component: FailureReport,
    name: "Failure Report",
    category: "failure-reports",
    type: "form",
    developer: "chanchal",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/reports/failure-report/edit",
    component: FailureReportEdit,
    name: "Edit Failure Report",
    category: "failure-reports",
    type: "edit",
    developer: "chanchal",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/reports/failure-report/list",
    component: FailureReportList,
    name: "Failure Report List",
    category: "failure-reports",
    type: "table",
    developer: "chanchal",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/reports/failure-report/new-list",
    component: FailureReport_NewList,
    name: "New Failure Report List",
    category: "failure-reports",
    type: "list",
    developer: "chanchal",
    requiredRole: ["Employee", "Admin"]
  },

  // Incident Reports - Pinki's module
  {
    path: "/reports/incident-accident",
    component: IncidentAccidentReportReg,
    name: "Incident & Accident Report",
    category: "incident-reports",
    type: "form",
    developer: "pinki",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/reports/incident-accident/edit",
    component: EditIncidentReport,
    name: "Edit Incident Report",
    category: "incident-reports",
    type: "edit",
    developer: "pinki",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/reports/incident-accident/list",
    component: IncidentAccidentReportList,
    name: "Incident & Accident Report List",
    category: "incident-reports",
    type: "table",
    developer: "pinki",
    requiredRole: ["Employee", "Admin"]
  }
];

/**
 * Get report routes by category
 */
export const getReportRoutesByCategory = (category) => {
  return reportRoutes.filter(route => route.category === category);
};

/**
 * Get report routes by type (form, edit, table, list)
 */
export const getReportRoutesByType = (type) => {
  return reportRoutes.filter(route => route.type === type);
};

/**
 * Get report routes by developer
 */
export const getReportRoutesByDeveloper = (developer) => {
  return reportRoutes.filter(route => route.developer === developer);
};

/**
 * Get all report categories
 */
export const getReportCategories = () => {
  const categories = [...new Set(reportRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Get all report types
 */
export const getReportTypes = () => {
  const types = [...new Set(reportRoutes.map(route => route.type))];
  return types.map(type => ({
    key: type,
    label: type.charAt(0).toUpperCase() + type.slice(1)
  }));
};

/**
 * Get all developers who have reports
 */
export const getReportDevelopers = () => {
  const developers = [...new Set(reportRoutes.filter(route => route.developer).map(route => route.developer))];
  return developers.map(dev => ({
    key: dev,
    label: dev.charAt(0).toUpperCase() + dev.slice(1)
  }));
};

/**
 * Get failure report routes specifically
 */
export const getFailureReportRoutes = () => {
  return getReportRoutesByCategory('failure-reports');
};

/**
 * Get incident report routes specifically
 */
export const getIncidentReportRoutes = () => {
  return getReportRoutesByCategory('incident-reports');
};

export default reportRoutes;