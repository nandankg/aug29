# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Operations
- `npm start` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build production bundle
- `npm test` - Run test suite in watch mode
- `npm run eject` - Eject from Create React App (one-way operation)

### Dependencies
- `npm install` - Install all dependencies

## Architecture Overview

This is a large-scale React application for UPMRC (Uttar Pradesh Metro Rail Corporation) built with Create React App. The application manages various operational forms, maintenance schedules, and administrative tasks for metro rail operations.

### Tech Stacku
- **Frontend**: React 18.3.1 with functional components and hooks
- **State Management**: Redux Toolkit (@reduxjs/toolkit) with extensive reducer structure
- **Routing**: React Router DOM v6
- **UI Framework**: Material-UI (MUI) v5 + React Bootstrap
- **Data Fetching**: TanStack React Query v5
- **Date Management**: Day.js and date-fns
- **Export Functionality**: Excel (xlsx, react-export-table-to-excel), PDF (jspdf, react-to-pdf), CSV (papaparse)
- **Notifications**: React Toastify

### Application Structure

#### Core Architecture
- **Modular by Feature**: Code is organized by functional areas (forms, tables, edit components)
- **Lazy Loading**: Major components are lazy-loaded to optimize bundle size
- **Redux-Heavy**: Uses Redux for state management with dedicated reducers for each form/feature

#### Directory Structure
```
src/
├── component/          # Reusable UI components
├── components/         # Additional component library
├── data/              # Static data, configurations, form schemas
├── edit/              # Edit form components (organized by developer)
├── forms/             # Form components (organized by developer/feature)
├── list/              # List/table view components
├── pages/             # Main page components
├── reducer/           # Redux reducers (organized by developer/feature)
├── shared/            # Shared utilities and services
│   ├── accessibility/ # Accessibility utilities and hooks
│   ├── api/          # API configuration and services
│   └── validation/   # Form validation schemas and hooks
├── store/             # Redux store configuration
├── tables/            # Table components
└── utils/             # Utility functions
```

#### Key Features
- **Multi-developer Organization**: Code is organized by developer names (akshra, chanchal, isha, manshi, monika, pinki, rajiv, satya) indicating team-based development
- **Form-Heavy Application**: Extensive form management for operational data entry
- **Export Capabilities**: Multiple export formats (Excel, PDF, CSV) for reports
- **User Management**: Role-based access with admin and employee roles
- **Station Management**: Multi-station support for metro operations

### Developer-Specific Modules
The codebase shows clear organization by developer/team member:
- **akshra/**: Telecom and DTR (Digital Train Radio) related forms
- **chanchal/**: Preventive maintenance and operational drill forms
- **isha/**: Equipment maintenance and technical forms
- **manshi/**: Material management and contractor forms
- **monika/**: Officer records and inspection forms
- **pinki/**: Asset management and inventory forms
- **rajiv/**: Operational logs and maintenance schedules
- **satya/**: System maintenance and technical records

### State Management Patterns
- Each major feature has its own reducer in the Redux store
- Reducers are organized by developer/feature area
- Heavy use of Redux Toolkit for state management
- Over 400 reducers registered in the store, indicating complex state requirements

### Component Patterns
- Extensive use of lazy loading for performance optimization
- Form components follow consistent naming patterns
- Edit components are separate from create/view components
- Table/list components are separated from form components

### API Integration
- Uses TanStack React Query for data fetching
- Custom API hooks in `shared/api/hooks/`
- Centralized API configuration in `shared/api/config/`

### Accessibility Support
- Dedicated accessibility utilities in `shared/accessibility/`
- ARIA utilities and keyboard navigation support
- Focus management hooks for better UX

## Development Guidelines

### Working with Forms
- Form components are located in `src/forms/` with subfolders by developer
- Edit components are in `src/edit/` with corresponding structure
- Each form typically has its own Redux reducer
- Use existing form validation patterns from `shared/validation/`

### Adding New Features
- Follow the existing developer-based organization pattern
- Create corresponding form, edit, list, and reducer components
- Register new reducers in `src/store/index.js`
- Use lazy loading for new page-level components

### State Management
- All form state should go through Redux
- Use Redux Toolkit patterns already established
- Follow the naming convention: `[featureName]Reducer`

### Code Organization
- Keep components modular and feature-specific
- Use the shared utilities for common functionality
- Follow existing patterns for export functionality (Excel/PDF)
- Maintain the developer-based folder organization for consistency