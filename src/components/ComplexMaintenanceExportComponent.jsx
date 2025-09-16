/**
 * ComplexMaintenanceExportComponent.jsx
 * Specialized Export Component for Complex Maintenance Tables
 *
 * Handles complex table structures with nested data, multiple sections,
 * and detailed maintenance checklists like AFC Preventive Maintenance.
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

const ComplexMaintenanceExportComponent = ({
  data,
  formName = 'Maintenance Checklist',
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

  // Generate Excel export for complex maintenance table
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
    worksheet.mergeCells(currentRow, 1, currentRow, 13);
    const titleCell = worksheet.getCell(currentRow, 1);
    titleCell.value = 'AFC PREVENTIVE MAINTENANCE CHECKLIST (TOM HALF YEARLY) (ANNEXURE-B)';
    titleCell.style = {
      font: { bold: true, size: 14, color: { argb: 'FF000080' } },
      alignment: { horizontal: 'center', vertical: 'middle' },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } }
    };
    currentRow += 2;

    // Add metadata
    if (formData.length > 0) {
      const item = formData[0];
      const metadataRows = [
        ['Station:', item.station || 'N/A', '', 'Date:', item.date || 'N/A', '', 'Month:', item.month || 'N/A'],
        ['Department:', item.department || 'N/A', '', 'Form ID:', item.id || 'N/A', '', 'Generated:', getCurrentIndianDate()],
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
    }

    // Process each form
    formData.forEach((item, formIndex) => {
      // TOM Section
      worksheet.mergeCells(currentRow, 1, currentRow, 13);
      const tomHeaderCell = worksheet.getCell(currentRow, 1);
      tomHeaderCell.value = 'TOM (Ticket Office Machine) Maintenance Activities';
      tomHeaderCell.style = headerStyle;
      currentRow++;

      // TOM Headers
      const tomHeaders = ['Sr.No', 'Activity', 'Description', 'TOM1', 'TOM2', 'TOM3', 'TOM4', 'TOM5', 'TOM6', 'TOM7', 'Remarks', 'Action', 'Deficiency'];
      tomHeaders.forEach((header, colIndex) => {
        const cell = worksheet.getCell(currentRow, colIndex + 1);
        cell.value = header;
        cell.style = headerStyle;
      });
      currentRow++;

      // TOM Activities data
      const activities1 = item.activities1 || [];
      const tomActivities = [
        { activity: 'Visual Inspection', description: 'Check Fixing & Alignment of all modules of TOM' },
        { activity: '', description: 'Checking of all Cable connection and dressing' },
        { activity: '', description: 'Check Date and Time' },
        { activity: '', description: 'Check Lubrication of all locks with silicone oil' },
        { activity: '', description: 'Sealing of unused USB Port' },
        { activity: '', description: 'Check TOM should be logged in via login card only' },
        { activity: '', description: 'Check for disabled USB drives' },
        { activity: '', description: 'Cleaning of Opto sensor, Antenna, Token tray, Reject bin, Token box, token path, token hopper' },
        { activity: 'Cleaning', description: 'Cleaning of all modules of TOM' },
        { activity: '', description: 'Cleaning of Trench' },
        { activity: 'Module Test', description: 'Card Reader Writer (CRW) Test' },
        { activity: '', description: 'Printer Test' },
        { activity: '', description: 'Passenger Display Unit (PDU) Test' },
        { activity: '', description: 'Token Dispensing Machine (TDM) Test' },
        { activity: '', description: 'Touch Screen Test' },
        { activity: '', description: 'Counter Communication System Test' },
        { activity: '', description: 'Keyboard, Mouse Test' },
        { activity: '', description: 'Check LAN Status' },
        { activity: '', description: 'Check Power strip' }
      ];

      tomActivities.forEach((activityDef, actIndex) => {
        const activityData = activities1[actIndex] || {};
        const rowData = [
          actIndex + 1,
          activityDef.activity,
          activityDef.description,
          activityData.TOM1 || '',
          activityData.TOM2 || '',
          activityData.TOM3 || '',
          activityData.TOM4 || '',
          activityData.TOM5 || '',
          activityData.TOM6 || '',
          activityData.TOM7 || '',
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

      // EC Section
      worksheet.mergeCells(currentRow, 1, currentRow, 13);
      const ecHeaderCell = worksheet.getCell(currentRow, 1);
      ecHeaderCell.value = 'EC (Electrical Cabinet) Maintenance Activities';
      ecHeaderCell.style = headerStyle;
      currentRow++;

      // EC Headers
      const ecHeaders = ['Sr.No', 'Activity', 'Description', 'EC1', 'EC2', 'EC3', 'EC4', 'EC5', 'EC6', 'EC7', 'Remarks', 'Actions', 'Deficiency'];
      ecHeaders.forEach((header, colIndex) => {
        const cell = worksheet.getCell(currentRow, colIndex + 1);
        cell.value = header;
        cell.style = headerStyle;
      });
      currentRow++;

      // EC Activities data
      const activities2 = item.activities2 || [];
      const ecActivities = [
        { activity: 'Visual Inspection', description: 'Checking of all Cable connection and dressing' },
        { activity: '', description: 'Tightening of all Electrical Connection in EC' },
        { activity: '', description: 'Checking of all indicators' },
        { activity: 'Cleaning', description: 'Cleaning of Isolator and all Electrical Cabinet' },
        { activity: 'Module Test', description: 'ELCB Push Button Operation' },
        { activity: '', description: 'Testing of Isolator Mode selector' }
      ];

      ecActivities.forEach((activityDef, actIndex) => {
        const activityData = activities2[actIndex] || {};
        const rowData = [
          actIndex + 1,
          activityDef.activity,
          activityDef.description,
          activityData.EC1 || '',
          activityData.EC2 || '',
          activityData.EC3 || '',
          activityData.EC4 || '',
          activityData.EC5 || '',
          activityData.EC6 || '',
          activityData.EC7 || '',
          activityData.remarks || '',
          activityData.actions || '',
          activityData.deficiency1 || ''
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
      worksheet.mergeCells(currentRow, 1, currentRow, 13);
      const staffHeaderCell = worksheet.getCell(currentRow, 1);
      staffHeaderCell.value = 'Staff Information';
      staffHeaderCell.style = headerStyle;
      currentRow++;

      const staffRows = [
        ['Staff 1:', item.staff1_name || 'N/A', 'Designation:', item.staff1_desg || 'N/A'],
        ['Staff 2:', item.staff2_name || 'N/A', 'Designation:', item.staff2_desg || 'N/A'],
        ['Staff 3:', item.staff3_name || 'N/A', 'Designation:', item.staff3_desg || 'N/A']
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

  // Generate PDF export for complex maintenance table
  const generatePDFExport = (formData) => {
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const user = getUserData();

    formData.forEach((item, formIndex) => {
      if (formIndex > 0) pdf.addPage();

      // Title
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('AFC PREVENTIVE MAINTENANCE CHECKLIST (TOM HALF YEARLY)', 148, 20, { align: 'center' });

      // Metadata
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const metaY = 35;
      pdf.text(`Station: ${item.station || 'N/A'}`, 20, metaY);
      pdf.text(`Date: ${item.date || 'N/A'}`, 120, metaY);
      pdf.text(`Month: ${item.month || 'N/A'}`, 200, metaY);
      pdf.text(`Department: ${item.department || 'N/A'}`, 20, metaY + 7);
      pdf.text(`Form ID: ${item.id || 'N/A'}`, 120, metaY + 7);
      pdf.text(`Generated: ${getCurrentIndianDate()}`, 200, metaY + 7);

      let startY = metaY + 20;

      // TOM Section
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TOM (Ticket Office Machine) Activities', 20, startY);
      startY += 10;

      const tomHeaders = ['Sr', 'Activity', 'Description', 'TOM1', 'TOM2', 'TOM3', 'TOM4', 'TOM5', 'TOM6', 'TOM7', 'Remarks'];
      const tomData = [];

      const activities1 = item.activities1 || [];
      const tomActivities = [
        'Check Fixing & Alignment of all modules of TOM',
        'Checking of all Cable connection and dressing',
        'Check Date and Time',
        'Check Lubrication of all locks with silicone oil',
        'Sealing of unused USB Port',
        'Check TOM should be logged in via login card only',
        'Check for disabled USB drives',
        'Cleaning of Opto sensor, Antenna, Token tray',
        'Cleaning of all modules of TOM',
        'Cleaning of Trench',
        'Card Reader Writer (CRW) Test',
        'Printer Test',
        'Passenger Display Unit (PDU) Test',
        'Token Dispensing Machine (TDM) Test',
        'Touch Screen Test',
        'Counter Communication System Test',
        'Keyboard, Mouse Test',
        'Check LAN Status',
        'Check Power strip'
      ];

      tomActivities.forEach((desc, index) => {
        const actData = activities1[index] || {};
        tomData.push([
          index + 1,
          index < 8 ? (index === 0 ? 'Visual' : index === 8 ? 'Cleaning' : index >= 10 ? 'Module Test' : '') : '',
          desc,
          actData.TOM1 || '',
          actData.TOM2 || '',
          actData.TOM3 || '',
          actData.TOM4 || '',
          actData.TOM5 || '',
          actData.TOM6 || '',
          actData.TOM7 || '',
          actData.remark || ''
        ]);
      });

      autoTable(pdf, {
        head: [tomHeaders],
        body: tomData,
        startY: startY,
        styles: { fontSize: 7, cellPadding: 1 },
        headStyles: { fillColor: [54, 96, 146], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 8 },
          1: { cellWidth: 15 },
          2: { cellWidth: 35 },
          3: { cellWidth: 12 },
          4: { cellWidth: 12 },
          5: { cellWidth: 12 },
          6: { cellWidth: 12 },
          7: { cellWidth: 12 },
          8: { cellWidth: 12 },
          9: { cellWidth: 12 },
          10: { cellWidth: 25 }
        }
      });

      // Add new page for EC section if needed
      const tomFinalY = pdf.lastAutoTable ? pdf.lastAutoTable.finalY : startY + 100;
      if (tomFinalY > 150) {
        pdf.addPage();
        startY = 20;
      } else {
        startY = tomFinalY + 15;
      }

      // EC Section
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('EC (Electrical Cabinet) Activities', 20, startY);
      startY += 10;

      const ecHeaders = ['Sr', 'Activity', 'Description', 'EC1', 'EC2', 'EC3', 'EC4', 'EC5', 'EC6', 'EC7', 'Remarks'];
      const ecData = [];

      const activities2 = item.activities2 || [];
      const ecActivities = [
        'Checking of all Cable connection and dressing',
        'Tightening of all Electrical Connection in EC',
        'Checking of all indicators',
        'Cleaning of Isolator and all Electrical Cabinet',
        'ELCB Push Button Operation',
        'Testing of Isolator Mode selector'
      ];

      ecActivities.forEach((desc, index) => {
        const actData = activities2[index] || {};
        ecData.push([
          index + 1,
          index < 3 ? (index === 0 ? 'Visual' : '') : index === 3 ? 'Cleaning' : 'Module Test',
          desc,
          actData.EC1 || '',
          actData.EC2 || '',
          actData.EC3 || '',
          actData.EC4 || '',
          actData.EC5 || '',
          actData.EC6 || '',
          actData.EC7 || '',
          actData.remarks || ''
        ]);
      });

      autoTable(pdf, {
        head: [ecHeaders],
        body: ecData,
        startY: startY,
        styles: { fontSize: 7, cellPadding: 1 },
        headStyles: { fillColor: [54, 96, 146], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 8 },
          1: { cellWidth: 15 },
          2: { cellWidth: 35 },
          3: { cellWidth: 12 },
          4: { cellWidth: 12 },
          5: { cellWidth: 12 },
          6: { cellWidth: 12 },
          7: { cellWidth: 12 },
          8: { cellWidth: 12 },
          9: { cellWidth: 12 },
          10: { cellWidth: 25 }
        }
      });

      // Staff Information
      const staffY = pdf.lastAutoTable ? pdf.lastAutoTable.finalY + 15 : startY + 50;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Staff Information:', 20, staffY);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`1. ${item.staff1_name || 'N/A'} - ${item.staff1_desg || 'N/A'}`, 20, staffY + 7);
      pdf.text(`2. ${item.staff2_name || 'N/A'} - ${item.staff2_desg || 'N/A'}`, 20, staffY + 14);
      pdf.text(`3. ${item.staff3_name || 'N/A'} - ${item.staff3_desg || 'N/A'}`, 20, staffY + 21);
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
      console.error('Complex export error:', error);

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
      className={`complex-maintenance-export-btn ${className}`}
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

        .complex-maintenance-export-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-color: #0a9989;
        }

        .complex-maintenance-export-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
};

ComplexMaintenanceExportComponent.propTypes = {
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

export default ComplexMaintenanceExportComponent;