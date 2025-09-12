/**
 * Admin Routes Module
 * 
 * Contains all administrative routes for the UPMRC application.
 * This module handles user management, system configuration, and administrative functions.
 */

import { lazy } from 'react';

// Lazy load admin components
const Dashboard = lazy(() => import("../pages/Dashboard"));
const AddUser = lazy(() => import("../pages/Adduser"));
const CreateAdmin = lazy(() => import("../pages/Admin/CreateAdmin"));
const AdminList = lazy(() => import("../pages/Admin/AdminList"));
const EditAdmin = lazy(() => import("../pages/EditAdmin"));
const ListUser = lazy(() => import("../pages/ListUser"));
const EditUser = lazy(() => import("../pages/EditUser"));
const StationAdd = lazy(() => import("../pages/Stationadd"));
const StationList = lazy(() => import("../pages/StationList"));
const StationEdit = lazy(() => import("../pages/StationEdit"));

// Admin-specific form components
const ListAssignedForm = lazy(() => import("../pages/Employee/ListAssignedForm"));

/**
 * Admin routes configuration
 * These routes are accessible only to users with admin privileges
 */
export const adminRoutes = [
  // Dashboard and Main Admin Interface
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    category: "main",
    requiredRole: "Admin"
  },

  // User Management Routes
  {
    path: "/add-user",
    component: AddUser,
    name: "Add User",
    category: "user-management",
    requiredRole: "Admin"
  },
  {
    path: "/create-admin",
    component: CreateAdmin,
    name: "Create Admin",
    category: "user-management",
    requiredRole: "Admin"
  },
  {
    path: "/admin-list",
    component: AdminList,
    name: "Admin List",
    category: "user-management",
    requiredRole: "Admin"
  },
  {
    path: "/edit-admin",
    component: EditAdmin,
    name: "Edit Admin",
    category: "user-management",
    requiredRole: "Admin"
  },
  {
    path: "/list-user",
    component: ListUser,
    name: "List Users",
    category: "user-management",
    requiredRole: "Admin"
  },
  {
    path: "/edit-user",
    component: EditUser,
    name: "Edit User",
    category: "user-management",
    requiredRole: "Admin"
  },

  // Station Management Routes
  {
    path: "/station-add",
    component: StationAdd,
    name: "Add Station",
    category: "station-management",
    requiredRole: "Admin"
  },
  {
    path: "/station-list",
    component: StationList,
    name: "Station List",
    category: "station-management",
    requiredRole: "Admin"
  },
  {
    path: "/station-edit",
    component: StationEdit,
    name: "Edit Station",
    category: "station-management",
    requiredRole: "Admin"
  },

  // Form Assignment and Management
  {
    path: "/list-assigned-forms",
    component: ListAssignedForm,
    name: "Assigned Forms",
    category: "form-management",
    requiredRole: "Admin"
  }
];

/**
 * Get admin routes by category
 */
export const getAdminRoutesByCategory = (category) => {
  return adminRoutes.filter(route => route.category === category);
};

/**
 * Get all admin route categories
 */
export const getAdminCategories = () => {
  const categories = [...new Set(adminRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Check if user has access to admin routes
 */
export const hasAdminAccess = (userRole) => {
  return userRole === 'Admin' || userRole === 'admin';
};

export default adminRoutes;