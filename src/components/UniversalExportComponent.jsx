/**
 * UniversalExportComponent.jsx
 * Universal Export Button Component for UPMRC Metro Rail Operations System
 *
 * Provides consistent export functionality across all 17 forms with:
 * - Single component replacing scattered export logic
 * - Support for Excel, PDF, and dual exports
 * - Progress tracking and user feedback
 * - Automatic metadata and user context inclusion
 * - Error handling and recovery
 * - Responsive design and accessibility
 *
 * Replaces EnhancedExcelExportComponent and inconsistent PDF exports
 * Created: September 15, 2025 - Phase 2: Export System Complete Overhaul
 */

import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { RiFileExcel2Fill, RiFilePdf2Fill, RiDownload2Fill } from 'react-icons/ri';
import exportService from '../services/ExportService';

const UniversalExportComponent = ({
  data,
  columns,
  exportType = 'excel',
  formName = 'Data Export',
  formId = '',
  includeSerialNumber = true,
  orientation = 'portrait',
  template = null,
  className = '',
  style = {},
  size = 'medium',
  showLabel = false,
  onExportStart = null,
  onExportComplete = null,
  onExportError = null,
  disabled = false
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStage, setExportStage] = useState('');

  // Memoize metadata to prevent unnecessary recalculations
  const metadata = useMemo(() => ({
    formName,
    formId,
    template,
    includeSerialNumber
  }), [formName, formId, template, includeSerialNumber]);

  // Export options
  const exportOptions = useMemo(() => ({
    includeSerialNumber,
    orientation,
    autoDownload: true,
    onProgress: (progressInfo) => {
      setExportProgress(progressInfo.progress);
      setExportStage(progressInfo.stage);
    }
  }), [includeSerialNumber, orientation]);

  // Handle export process
  const handleExport = useCallback(async () => {
    if (isExporting || disabled) return;

    setIsExporting(true);
    setExportProgress(0);
    setExportStage('starting');

    try {
      // Call onExportStart callback
      if (onExportStart) {
        onExportStart(exportType);
      }

      // Perform export
      const result = await exportService.exportForm({
        data,
        columns,
        exportType,
        metadata,
        options: exportOptions
      });

      // Call onExportComplete callback
      if (onExportComplete) {
        onExportComplete(result);
      }

      // Reset state after successful export
      setExportProgress(100);
      setExportStage('completed');

      // Reset progress after a delay
      setTimeout(() => {
        setExportProgress(0);
        setExportStage('');
      }, 2000);

    } catch (error) {
      console.error('Export error:', error);

      // Call onExportError callback
      if (onExportError) {
        onExportError(error);
      } else {
        // Show default error message
        alert(`Export failed: ${error.message}. Please try again or contact support.`);
      }

      // Reset state after error
      setExportProgress(0);
      setExportStage('error');

      // Reset error state after a delay
      setTimeout(() => {
        setExportStage('');
      }, 3000);

    } finally {
      setIsExporting(false);
    }
  }, [
    data,
    columns,
    exportType,
    metadata,
    exportOptions,
    isExporting,
    disabled,
    onExportStart,
    onExportComplete,
    onExportError
  ]);

  // Get icon based on export type
  const getExportIcon = () => {
    const iconSize = getIconSize();

    switch (exportType.toLowerCase()) {
      case 'excel':
        return <RiFileExcel2Fill color="#0baa9a" size={iconSize} />;
      case 'pdf':
        return <RiFilePdf2Fill color="#dc3545" size={iconSize} />;
      case 'both':
        return <RiDownload2Fill color="#6f42c1" size={iconSize} />;
      default:
        return <RiFileExcel2Fill color="#0baa9a" size={iconSize} />;
    }
  };

  // Get icon size based on component size
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 18;
      case 'medium':
        return 25;
      case 'large':
        return 32;
      default:
        return 25;
    }
  };

  // Get button size styles
  const getButtonStyles = () => {
    const baseStyles = {
      border: "1px solid #0baa9a",
      borderRadius: "4px",
      backgroundColor: "#f8f9fa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      cursor: disabled || isExporting ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.2s ease",
      position: "relative",
      overflow: "hidden"
    };

    const sizeStyles = {
      small: {
        minWidth: "35px",
        padding: "6px",
        fontSize: "12px"
      },
      medium: {
        minWidth: "45px",
        padding: "8px",
        fontSize: "14px"
      },
      large: {
        minWidth: "55px",
        padding: "12px",
        fontSize: "16px"
      }
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...style
    };
  };

  // Get export type label
  const getExportLabel = () => {
    switch (exportType.toLowerCase()) {
      case 'excel':
        return 'Excel';
      case 'pdf':
        return 'PDF';
      case 'both':
        return 'Both';
      default:
        return 'Export';
    }
  };

  // Get tooltip text
  const getTooltipText = () => {
    if (disabled) {
      return 'Export not available';
    }

    if (isExporting) {
      return `Exporting... ${exportProgress.toFixed(0)}%`;
    }

    const typeLabel = getExportLabel();
    const recordCount = data ? data.length : 0;

    return `Export ${recordCount} records as ${typeLabel} - ${formName}`;
  };

  // Get stage description for progress
  const getStageDescription = () => {
    const stageDescriptions = {
      'starting': 'Initializing export...',
      'preparation': 'Preparing data...',
      'excel_generation': 'Generating Excel file...',
      'pdf_generation': 'Generating PDF file...',
      'dual_export_start': 'Starting dual export...',
      'excel_ready': 'Excel file ready...',
      'pdf_ready': 'PDF file ready...',
      'dual_export_ready': 'Both files ready...',
      'completed': 'Export completed!',
      'error': 'Export failed!'
    };

    return stageDescriptions[exportStage] || '';
  };

  // Validate data before export
  const isValidForExport = useMemo(() => {
    return data &&
           Array.isArray(data) &&
           data.length > 0 &&
           columns &&
           Array.isArray(columns) &&
           columns.length > 0;
  }, [data, columns]);

  return (
    <button
      onClick={handleExport}
      className={`universal-export-btn ${className}`}
      style={getButtonStyles()}
      title={getTooltipText()}
      disabled={disabled || isExporting || !isValidForExport}
      aria-label={`Export ${formName} as ${getExportLabel()}`}
      role="button"
    >
      {/* Export Icon */}
      {!isExporting && getExportIcon()}

      {/* Loading Spinner */}
      {isExporting && (
        <div
          style={{
            width: getIconSize(),
            height: getIconSize(),
            border: "2px solid #f3f3f3",
            borderTop: "2px solid #0baa9a",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}
        />
      )}

      {/* Label (if enabled) */}
      {showLabel && (
        <span style={{
          fontSize: getButtonStyles().fontSize,
          fontWeight: "500",
          color: "#333"
        }}>
          {isExporting ? `${exportProgress.toFixed(0)}%` : getExportLabel()}
        </span>
      )}

      {/* Progress Bar */}
      {isExporting && exportProgress > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            backgroundColor: "#0baa9a",
            width: `${exportProgress}%`,
            transition: "width 0.3s ease"
          }}
        />
      )}

      {/* CSS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .universal-export-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-color: #0a9989;
        }

        .universal-export-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
};

UniversalExportComponent.propTypes = {
  // Required props
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,

  // Export configuration
  exportType: PropTypes.oneOf(['excel', 'pdf', 'both']),
  formName: PropTypes.string,
  formId: PropTypes.string,
  includeSerialNumber: PropTypes.bool,
  orientation: PropTypes.oneOf(['portrait', 'landscape']),
  template: PropTypes.oneOf(['standard', 'maintenance', 'inspection', 'incident']),

  // UI configuration
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabel: PropTypes.bool,
  disabled: PropTypes.bool,

  // Callback functions
  onExportStart: PropTypes.func,
  onExportComplete: PropTypes.func,
  onExportError: PropTypes.func
};

export default UniversalExportComponent;