/**
 * TVMMaintenanceExportComponent.jsx
 * Specialized Export Component for TVM (Ticket Vending Machine) Maintenance Tables
 *
 * Handles TVM maintenance checklists with yes/no responses across TVM1-TVM5 columns
 * Built on ComplexMaintenanceExportComponent foundation
 *
 * Created: September 16, 2025
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { RiFileExcel2Fill, RiFilePdf2Fill, RiDownload2Fill } from 'react-icons/ri';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { getCurrentIndianDate } from '../utils/dateUtils';

const TVMMaintenanceExportComponent = ({
  data,
  formName = 'TVM Maintenance Checklist',
  formId = '',
  exportType = 'both',
  size = 'medium',
  showLabel = false,
  className = '',
  style = {},
  disabled = false,
  onExportStart = null,
  onExportComplete = null,
  onExportError = null
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // Get user data
  const getUserData = () => {
    try {
      const userData = localStorage.getItem('userdata');
      return userData ? JSON.parse(userData) : {};
    } catch (error) {
      return {};
    }
  };

  // TVM Activity definitions
  const tvmActivities = [
    { activity: 'Visual Inspection', description: 'Check Fixing & Alignment of all modules of TVM' },
    { activity: '', description: 'Checking Silicon sealing of TVM Cabinet' },
    { activity: '', description: 'Checking Silicon sealing of TVM Cabinet' },
    { activity: '', description: 'Checking of any opening inside TVM cabinet' },
    { activity: '', description: 'Checking of Power Supply and Battery' },
    { activity: '', description: 'Check Station ID' },
    { activity: '', description: 'Check Device ID' },
    { activity: '', description: 'Check Date and Time' },
    { activity: '', description: 'Check Passenger Information Display (PID)' },
    { activity: 'Cleaning', description: 'Cleaning of all modules of TVM' },
    { activity: '', description: 'Cleaning of lexan covering board of display' },
    { activity: '', description: 'Cleaning of Coin hopper opto sensor' },
    { activity: '', description: 'Cleaning of Cooling fans' },
    { activity: '', description: 'Checking and Cleaning of Cooling fan filter' },
    { activity: '', description: 'Cleaning of BNR' },
    { activity: '', description: 'Cleaning of Bank card reader' },
    { activity: 'Module Test', description: 'Check LAN Status (Ping Server)' },
    { activity: '', description: 'Component Status' },
    { activity: '', description: 'Token Dispenser Test' },
    { activity: '', description: 'Bank Note system Test' },
    { activity: '', description: 'Payment Terminal Test' },
    { activity: '', description: 'Printer Test' },
    { activity: '', description: 'Audio Test' },
    { activity: '', description: 'Bowl LED Test' },
    { activity: '', description: 'Alarm Test' },
    { activity: '', description: 'Coin Dispenser Test' },
    { activity: '', description: 'Card Reader Test' }
  ];

  // Generate Excel export for TVM maintenance table
  const generateExcelExport = async (formData) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(formName);
    const user = getUserData();

    // Set up styles
    const headerStyle = {
      font: { bold: true, size: 12, color: { argb: 'FFFFFFFF' } },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } },
      alignment: { horizontal: 'center', vertical: 'middle' },
      border: { top: { style: 'medium' }, left: { style: 'medium' }, bottom: { style: 'medium' }, right: { style: 'medium' } }
    };

    const dataStyle = {
      font: { size: 10 },
      alignment: { horizontal: 'center', vertical: 'middle' },
      border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    };

    const metaStyle = {
      font: { bold: true, size: 11 },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } },
      alignment: { horizontal: 'left', vertical: 'middle' }
    };

    let currentRow = 1;

    // Add title
    worksheet.mergeCells(currentRow, 1, currentRow, 12);
    const titleCell = worksheet.getCell(currentRow, 1);
    titleCell.value = 'AFC PREVENTIVE MAINTENANCE CHECKLIST (Monthly) - TVM';
    titleCell.style = {
      font: { bold: true, size: 14, color: { argb: 'FF000080' } },
      alignment: { horizontal: 'center', vertical: 'middle' },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } }
    };
    currentRow += 2;

    // Process each form
    formData.forEach((item, formIndex) => {
      if (formIndex > 0) {
        currentRow += 3;
      }

      // Add metadata
      const metadataRows = [
        ['Station Name:', item.station || 'N/A', '', 'Month:', item.month || 'N/A', '', 'Date:', item.date || 'N/A'],
        ['Frequency:', 'Monthly', '', 'Form ID:', item.id || 'N/A', '', 'Generated:', getCurrentIndianDate()],
        ['Exported By:', user.name || 'Unknown', '', 'Employee ID:', user.employeeid || 'N/A', '', 'Export Time:', new Date().toLocaleTimeString()]
      ];

      metadataRows.forEach(row => {
        row.forEach((value, colIndex) => {
          const cell = worksheet.getCell(currentRow, colIndex + 1);
          cell.value = value;
          if (colIndex % 3 === 0 && value.endsWith(':')) {
            cell.style = metaStyle;
          }
        });
        currentRow++;
      });
      currentRow++;

      // TVM Section Header
      worksheet.mergeCells(currentRow, 1, currentRow, 12);
      const tvmHeaderCell = worksheet.getCell(currentRow, 1);
      tvmHeaderCell.value = 'TVM (Ticket Vending Machine) Maintenance Activities';
      tvmHeaderCell.style = headerStyle;
      currentRow++;

      // TVM Headers
      const tvmHeaders = ['Sr.No', 'Activity', 'Description', 'TVM1', 'TVM2', 'TVM3', 'TVM4', 'TVM5', 'Remarks', 'Action', 'Deficiency'];
      tvmHeaders.forEach((header, colIndex) => {
        const cell = worksheet.getCell(currentRow, colIndex + 1);
        cell.value = header;
        cell.style = headerStyle;
      });
      currentRow++;

      // TVM Activities data
      const activities = item.activities || [];

      tvmActivities.forEach((activityDef, actIndex) => {
        const activityData = activities[actIndex] || {};
        const rowData = [
          actIndex + 1,
          activityDef.activity,
          activityDef.description,
          activityData.TVM1 || '',
          activityData.TVM2 || '',
          activityData.TVM3 || '',
          activityData.TVM4 || '',
          activityData.TVM5 || '',
          activityData.remark || '',
          activityData.action || '',
          activityData.deficiency || ''
        ];

        rowData.forEach((value, colIndex) => {
          const cell = worksheet.getCell(currentRow, colIndex + 1);
          cell.value = value;
          cell.style = dataStyle;
        });
        currentRow++;
      });

      currentRow += 2;

      // Staff Information
      worksheet.mergeCells(currentRow, 1, currentRow, 12);
      const staffHeaderCell = worksheet.getCell(currentRow, 1);
      staffHeaderCell.value = 'Staff Information';
      staffHeaderCell.style = headerStyle;
      currentRow++;

      const staffRows = [
        ['Staff 1:', item.staff1_name || 'N/A', 'Designation:', item.staff1_desg || 'N/A', 'Employee ID:', item.staff1_sign || 'N/A'],
        ['Staff 2:', item.staff2_name || 'N/A', 'Designation:', item.staff2_desg || 'N/A', 'Employee ID:', item.staff2_sign || 'N/A'],
        ['Staff 3:', item.staff3_name || 'N/A', 'Designation:', item.staff3_desg || 'N/A', 'Employee ID:', item.staff3_sign || 'N/A']
      ];

      staffRows.forEach(row => {
        row.forEach((value, colIndex) => {
          const cell = worksheet.getCell(currentRow, colIndex + 1);
          cell.value = value;
          if (colIndex % 2 === 0 && value.endsWith(':')) {
            cell.style = metaStyle;
          } else {
            cell.style = dataStyle;
          }
        });
        currentRow++;
      });

      currentRow += 3;
    });

    // Auto-size columns
    worksheet.columns.forEach(column => {
      let maxLength = 0;
      column.eachCell(cell => {
        if (cell.value) {
          maxLength = Math.max(maxLength, cell.value.toString().length);
        }
      });
      column.width = Math.min(Math.max(maxLength + 2, 10), 50);
    });

    // Generate and return blob
    const buffer = await workbook.xlsx.writeBuffer();
    return new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
  };

  // Generate PDF export for TVM maintenance table
  const generatePDFExport = (formData) => {
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const user = getUserData();

    formData.forEach((item, formIndex) => {
      if (formIndex > 0) pdf.addPage();

      // Title
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('AFC PREVENTIVE MAINTENANCE CHECKLIST (Monthly) - TVM', 148, 20, { align: 'center' });

      // Metadata
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const metaY = 35;
      pdf.text(`Station: ${item.station || 'N/A'}`, 20, metaY);
      pdf.text(`Month: ${item.month || 'N/A'}`, 120, metaY);
      pdf.text(`Date: ${item.date || 'N/A'}`, 200, metaY);
      pdf.text(`Frequency: Monthly`, 20, metaY + 7);
      pdf.text(`Form ID: ${item.id || 'N/A'}`, 120, metaY + 7);
      pdf.text(`Generated: ${getCurrentIndianDate()}`, 200, metaY + 7);

      let startY = metaY + 20;

      // TVM Section
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TVM (Ticket Vending Machine) Activities', 20, startY);
      startY += 10;

      const tvmHeaders = ['Sr', 'Activity', 'Description', 'TVM1', 'TVM2', 'TVM3', 'TVM4', 'TVM5', 'Remarks'];
      const tvmData = [];

      const activities = item.activities || [];

      tvmActivities.forEach((activityDef, index) => {
        const actData = activities[index] || {};
        tvmData.push([
          index + 1,
          activityDef.activity,
          activityDef.description,
          actData.TVM1 || '',
          actData.TVM2 || '',
          actData.TVM3 || '',
          actData.TVM4 || '',
          actData.TVM5 || '',
          actData.remark || ''
        ]);
      });

      autoTable(pdf, {
        head: [tvmHeaders],
        body: tvmData,
        startY: startY,
        styles: { fontSize: 7, cellPadding: 1 },
        headStyles: { fillColor: [54, 96, 146], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 8 },
          1: { cellWidth: 20 },
          2: { cellWidth: 45 },
          3: { cellWidth: 15 },
          4: { cellWidth: 15 },
          5: { cellWidth: 15 },
          6: { cellWidth: 15 },
          7: { cellWidth: 15 },
          8: { cellWidth: 30 }
        }
      });

      // Staff Information
      const staffY = pdf.lastAutoTable ? pdf.lastAutoTable.finalY + 15 : startY + 150;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Staff Information:', 20, staffY);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`1. ${item.staff1_name || 'N/A'} - ${item.staff1_desg || 'N/A'} (ID: ${item.staff1_sign || 'N/A'})`, 20, staffY + 7);
      pdf.text(`2. ${item.staff2_name || 'N/A'} - ${item.staff2_desg || 'N/A'} (ID: ${item.staff2_sign || 'N/A'})`, 20, staffY + 14);
      pdf.text(`3. ${item.staff3_name || 'N/A'} - ${item.staff3_desg || 'N/A'} (ID: ${item.staff3_sign || 'N/A'})`, 20, staffY + 21);
    });

    return pdf.output('blob');
  };

  // Download file
  const downloadFile = (blob, fileName) => {
    try {
      if (!blob || blob.size === 0) {
        throw new Error('Invalid or empty file');
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      throw new Error(`Download failed: ${error.message}`);
    }
  };

  // Generate filename
  const generateFileName = (extension) => {
    const date = getCurrentIndianDate(false).replace(/[/\s:]/g, '-');
    return `${formName.replace(/\s+/g, '-')}-${date}.${extension}`;
  };

  // Handle export
  const handleExport = useCallback(async () => {
    if (isExporting || disabled || !data || data.length === 0) return;

    setIsExporting(true);
    setExportProgress(0);

    try {
      if (onExportStart) {
        onExportStart(exportType);
      }

      setExportProgress(20);

      if (exportType === 'excel' || exportType === 'both') {
        setExportProgress(40);
        const excelBlob = await generateExcelExport(data);
        downloadFile(excelBlob, generateFileName('xlsx'));
        setExportProgress(60);
      }

      if (exportType === 'pdf' || exportType === 'both') {
        setExportProgress(80);
        const pdfBlob = generatePDFExport(data);

        if (exportType === 'both') {
          setTimeout(() => {
            downloadFile(pdfBlob, generateFileName('pdf'));
          }, 500);
        } else {
          downloadFile(pdfBlob, generateFileName('pdf'));
        }
      }

      setExportProgress(100);

      if (onExportComplete) {
        onExportComplete({ success: true, exportType });
      }

      setTimeout(() => {
        setExportProgress(0);
      }, 2000);

    } catch (error) {
      console.error('TVM export error:', error);

      if (onExportError) {
        onExportError(error);
      } else {
        alert(`Export failed: ${error.message}. Please try again or contact support.`);
      }

      setExportProgress(0);
    } finally {
      setIsExporting(false);
    }
  }, [data, exportType, formName, isExporting, disabled, onExportStart, onExportComplete, onExportError]);

  // Get icon based on export type
  const getExportIcon = () => {
    const iconSize = size === 'small' ? 18 : size === 'large' ? 32 : 25;

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

  // Get button styles
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
      small: { minWidth: "35px", padding: "6px", fontSize: "12px" },
      medium: { minWidth: "45px", padding: "8px", fontSize: "14px" },
      large: { minWidth: "55px", padding: "12px", fontSize: "16px" }
    };

    return { ...baseStyles, ...sizeStyles[size], ...style };
  };

  // Get export label
  const getExportLabel = () => {
    switch (exportType.toLowerCase()) {
      case 'excel': return 'Excel';
      case 'pdf': return 'PDF';
      case 'both': return 'Both';
      default: return 'Export';
    }
  };

  return (
    <button
      onClick={handleExport}
      className={`tvm-maintenance-export-btn ${className}`}
      style={getButtonStyles()}
      disabled={disabled || isExporting || !data || data.length === 0}
      title={`Export ${formName} as ${getExportLabel()}`}
      aria-label={`Export ${formName} as ${getExportLabel()}`}
    >
      {/* Export Icon */}
      {!isExporting && getExportIcon()}

      {/* Loading Spinner */}
      {isExporting && (
        <div
          style={{
            width: size === 'small' ? 18 : size === 'large' ? 32 : 25,
            height: size === 'small' ? 18 : size === 'large' ? 32 : 25,
            border: "2px solid #f3f3f3",
            borderTop: "2px solid #0baa9a",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}
        />
      )}

      {/* Label */}
      {showLabel && (
        <span style={{ fontSize: getButtonStyles().fontSize, fontWeight: "500", color: "#333" }}>
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

        .tvm-maintenance-export-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-color: #0a9989;
        }

        .tvm-maintenance-export-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
};

TVMMaintenanceExportComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  formName: PropTypes.string,
  formId: PropTypes.string,
  exportType: PropTypes.oneOf(['excel', 'pdf', 'both']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onExportStart: PropTypes.func,
  onExportComplete: PropTypes.func,
  onExportError: PropTypes.func
};

export default TVMMaintenanceExportComponent;