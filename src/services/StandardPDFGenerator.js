/**
 * StandardPDFGenerator.js
 * Universal PDF export engine for UPMRC Metro Rail Operations System
 *
 * Provides consistent, standardized PDF generation across all forms with:
 * - UPMRC branding and professional formatting
 * - Standardized templates for different form types
 * - Complete metadata inclusion (employee, form, timestamp)
 * - Multi-page handling with proper headers/footers
 * - Print-friendly layouts and responsive design
 * - Security-focused implementation without vulnerabilities
 *
 * Replaces inconsistent PDF generation across 17 forms
 * Created: September 15, 2025 - Phase 2: Export System Complete Overhaul
 */

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatToIndianDate, getCurrentIndianDate } from '../utils/dateUtils';

class StandardPDFGenerator {
  constructor() {
    // Standard page settings for UPMRC documents
    this.pageSettings = {
      format: 'a4',
      orientation: 'portrait',
      unit: 'mm',
      margin: {
        top: 25,
        right: 15,
        bottom: 20,
        left: 15
      }
    };

    // UPMRC brand colors
    this.colors = {
      primary: [31, 78, 121],      // UPMRC Blue #1F4E79
      secondary: [68, 114, 196],   // Light Blue #4472C4
      accent: [11, 170, 154],      // UPMRC Green #0BAA9A
      text: [33, 33, 33],          // Dark Gray #212121
      lightGray: [242, 242, 242],  // Light Gray #F2F2F2
      white: [255, 255, 255]       // White #FFFFFF
    };

    // Standard font sizes
    this.fonts = {
      title: 16,
      header: 14,
      subHeader: 12,
      body: 10,
      small: 8
    };

    // Template configurations
    this.templates = {
      standard: {
        name: 'Standard Form Template',
        headerHeight: 35,
        footerHeight: 15,
        contentPadding: 5
      },
      maintenance: {
        name: 'Maintenance Form Template',
        headerHeight: 40,
        footerHeight: 20,
        contentPadding: 5,
        includeEquipmentInfo: true
      },
      inspection: {
        name: 'Inspection Form Template',
        headerHeight: 40,
        footerHeight: 20,
        contentPadding: 5,
        includeInspectionMeta: true
      },
      incident: {
        name: 'Incident Form Template',
        headerHeight: 45,
        footerHeight: 25,
        contentPadding: 5,
        includeUrgencyMarker: true
      }
    };
  }

  /**
   * Main method to generate PDF for any form
   * @param {Object} params - Generation parameters
   * @param {Array} params.data - Form data array
   * @param {Array} params.columns - Column definitions
   * @param {Object} params.metadata - Form metadata
   * @param {string} params.template - Template type (standard, maintenance, inspection, incident)
   * @param {string} params.orientation - Page orientation (portrait/landscape)
   * @returns {Promise<Blob>} PDF blob for download
   */
  async generateFormPDF({
    data,
    columns,
    metadata = {},
    template = 'standard',
    orientation = 'portrait'
  }) {
    try {
      // Validate inputs
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error('No data provided for PDF generation');
      }
      if (!columns || !Array.isArray(columns) || columns.length === 0) {
        throw new Error('No column definitions provided');
      }

      // Initialize PDF with proper settings
      const pdf = new jsPDF({
        orientation: orientation,
        unit: this.pageSettings.unit,
        format: this.pageSettings.format
      });

      // Get user data for metadata
      const user = this.getUserData();

      // Get template configuration
      const templateConfig = this.templates[template] || this.templates.standard;

      // Set PDF metadata
      this.setPDFMetadata(pdf, metadata, user);

      // Add UPMRC header
      this.addUMPRCHeader(pdf, metadata, templateConfig, user);

      // Add form metadata section
      const metadataHeight = this.addMetadataSection(pdf, metadata, user, templateConfig);

      // Prepare data for table
      const tableData = this.prepareTableData(data, columns);

      // Add data table
      this.addDataTable(pdf, tableData, columns, metadataHeight, templateConfig);

      // Add footer to all pages
      this.addFooterToAllPages(pdf, user, metadata);

      // Return PDF blob
      return new Blob([pdf.output('blob')], { type: 'application/pdf' });

    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error(`Failed to generate PDF: ${error.message}`);
    }
  }

  /**
   * Get user data from localStorage with fallbacks
   * @returns {Object} User data object
   */
  getUserData() {
    try {
      const userData = localStorage.getItem('userdata');
      return userData ? JSON.parse(userData) : {};
    } catch (error) {
      console.warn('Failed to parse user data:', error);
      return {};
    }
  }

  /**
   * Set PDF document metadata
   * @param {jsPDF} pdf - PDF instance
   * @param {Object} metadata - Form metadata
   * @param {Object} user - User data
   */
  setPDFMetadata(pdf, metadata, user) {
    const currentDate = getCurrentIndianDate(false);

    pdf.setProperties({
      title: `${metadata.formName || 'UPMRC Report'} - ${currentDate}`,
      subject: `${metadata.formName || 'Data Export'} - UPMRC Metro Rail Operations`,
      author: user?.name || 'UPMRC User',
      creator: 'UPMRC Metro Rail Corporation Limited',
      producer: 'UPMRC Export System v2.0',
      keywords: `UPMRC, Metro Rail, ${metadata.formId || 'Report'}, ${user?.station || 'Operations'}`,
      creationDate: new Date(),
      modDate: new Date()
    });
  }

  /**
   * Add UPMRC branded header to PDF
   * @param {jsPDF} pdf - PDF instance
   * @param {Object} metadata - Form metadata
   * @param {Object} templateConfig - Template configuration
   * @param {Object} user - User data
   */
  addUMPRCHeader(pdf, metadata, templateConfig, user) {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = this.pageSettings.margin;

    // Main title background
    pdf.setFillColor(...this.colors.primary);
    pdf.rect(margin.left, margin.top - 5, pageWidth - margin.left - margin.right, 18, 'F');

    // Main title text
    pdf.setTextColor(...this.colors.white);
    pdf.setFontSize(this.fonts.title);
    pdf.setFont('helvetica', 'bold');
    pdf.text(
      'UPMRC - Uttar Pradesh Metro Rail Corporation Limited',
      pageWidth / 2,
      margin.top + 5,
      { align: 'center' }
    );

    // Form title section
    pdf.setFillColor(...this.colors.secondary);
    pdf.rect(margin.left, margin.top + 15, pageWidth - margin.left - margin.right, 12, 'F');

    pdf.setTextColor(...this.colors.white);
    pdf.setFontSize(this.fonts.header);
    pdf.setFont('helvetica', 'bold');
    pdf.text(
      metadata.formName || 'Data Export Report',
      pageWidth / 2,
      margin.top + 23,
      { align: 'center' }
    );

    // Station and date info
    pdf.setFillColor(...this.colors.lightGray);
    pdf.rect(margin.left, margin.top + 29, pageWidth - margin.left - margin.right, 8, 'F');

    pdf.setTextColor(...this.colors.text);
    pdf.setFontSize(this.fonts.body);
    pdf.setFont('helvetica', 'normal');

    // Left side - Station info
    const stationText = `Station: ${user?.station || 'N/A'}`;
    pdf.text(stationText, margin.left + 2, margin.top + 34);

    // Right side - Date info
    const dateText = `Report Date: ${getCurrentIndianDate(false)}`;
    pdf.text(dateText, pageWidth - margin.right - 2, margin.top + 34, { align: 'right' });

    // Add template-specific markers
    if (templateConfig.includeUrgencyMarker) {
      pdf.setFillColor(255, 0, 0); // Red for incident reports
      pdf.rect(pageWidth - margin.right - 25, margin.top - 3, 20, 6, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(this.fonts.small);
      pdf.setFont('helvetica', 'bold');
      pdf.text('INCIDENT', pageWidth - margin.right - 15, margin.top + 1, { align: 'center' });
    }
  }

  /**
   * Add metadata section with form and user information
   * @param {jsPDF} pdf - PDF instance
   * @param {Object} metadata - Form metadata
   * @param {Object} user - User data
   * @param {Object} templateConfig - Template configuration
   * @returns {number} Height of metadata section
   */
  addMetadataSection(pdf, metadata, user, templateConfig) {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = this.pageSettings.margin;
    const startY = margin.top + templateConfig.headerHeight + 5;

    let currentY = startY;
    const rowHeight = 6;
    const leftColWidth = 35;

    // Metadata rows
    const metadataRows = [
      ['Form ID:', metadata.formId || 'N/A'],
      ['Total Records:', metadata.totalRecords?.toString() || '0'],
      ['Exported by:', user?.name || 'Unknown User'],
      ['Employee ID:', user?.employeeid || user?.profileid || 'N/A'],
      ['Department:', user?.department || 'N/A'],
      ['Export Time:', getCurrentIndianDate(true)]
    ];

    // Add template-specific metadata
    if (templateConfig.includeEquipmentInfo && metadata.equipmentType) {
      metadataRows.splice(2, 0, ['Equipment Type:', metadata.equipmentType]);
    }

    if (templateConfig.includeInspectionMeta && metadata.inspectionType) {
      metadataRows.splice(2, 0, ['Inspection Type:', metadata.inspectionType]);
    }

    // Draw metadata table
    pdf.setFillColor(...this.colors.lightGray);
    pdf.rect(margin.left, currentY, pageWidth - margin.left - margin.right, metadataRows.length * rowHeight, 'F');

    pdf.setDrawColor(...this.colors.text);
    pdf.setLineWidth(0.1);

    // Draw metadata rows
    metadataRows.forEach((row, index) => {
      const y = currentY + (index * rowHeight);

      // Row separator line
      if (index > 0) {
        pdf.line(margin.left, y, pageWidth - margin.right, y);
      }

      // Label column
      pdf.setTextColor(...this.colors.text);
      pdf.setFontSize(this.fonts.body);
      pdf.setFont('helvetica', 'bold');
      pdf.text(row[0], margin.left + 2, y + 4);

      // Value column
      pdf.setFont('helvetica', 'normal');
      pdf.text(row[1], margin.left + leftColWidth, y + 4);

      // Column separator line
      pdf.line(margin.left + leftColWidth - 1, y, margin.left + leftColWidth - 1, y + rowHeight);
    });

    // Border around metadata section
    pdf.rect(margin.left, currentY, pageWidth - margin.left - margin.right, metadataRows.length * rowHeight);

    return currentY + (metadataRows.length * rowHeight) + 8;
  }

  /**
   * Prepare table data with proper formatting
   * @param {Array} data - Raw form data
   * @param {Array} columns - Column definitions
   * @returns {Array} Formatted table data
   */
  prepareTableData(data, columns) {
    return data.map((row, index) => {
      const formattedRow = [(index + 1).toString()]; // S.No

      columns.forEach(col => {
        let value = row[col.field] || '';

        // Format dates to Indian format
        if (value && (
          col.field.toLowerCase().includes('date') ||
          col.field.toLowerCase().includes('time') ||
          col.headerName.toLowerCase().includes('date') ||
          col.headerName.toLowerCase().includes('time')
        )) {
          const indianDate = formatToIndianDate(value);
          if (indianDate) {
            value = indianDate;
          }
        }

        // Handle long text
        if (typeof value === 'string' && value.length > 50) {
          value = value.substring(0, 47) + '...';
        }

        formattedRow.push(value.toString());
      });

      return formattedRow;
    });
  }

  /**
   * Add data table to PDF
   * @param {jsPDF} pdf - PDF instance
   * @param {Array} tableData - Formatted table data
   * @param {Array} columns - Column definitions
   * @param {number} startY - Y position to start table
   * @param {Object} templateConfig - Template configuration
   */
  addDataTable(pdf, tableData, columns, startY, templateConfig) {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = this.pageSettings.margin;

    // Prepare headers
    const headers = ['S.No', ...columns.map(col => col.headerName)];

    // Calculate column widths
    const availableWidth = pageWidth - margin.left - margin.right;
    const serialColWidth = 15;
    const remainingWidth = availableWidth - serialColWidth;
    const dataColWidth = remainingWidth / columns.length;

    const colWidths = [serialColWidth, ...Array(columns.length).fill(dataColWidth)];

    // AutoTable configuration
    const autoTableConfig = {
      head: [headers],
      body: tableData,
      startY: startY,
      margin: { left: margin.left, right: margin.right },
      columnStyles: {},
      headStyles: {
        fillColor: this.colors.secondary,
        textColor: this.colors.white,
        fontStyle: 'bold',
        fontSize: this.fonts.body,
        halign: 'center',
        valign: 'middle'
      },
      bodyStyles: {
        fontSize: this.fonts.small,
        textColor: this.colors.text,
        valign: 'top'
      },
      alternateRowStyles: {
        fillColor: this.colors.lightGray
      },
      styles: {
        lineColor: this.colors.text,
        lineWidth: 0.1,
        cellPadding: 2
      },
      theme: 'grid',
      showHead: 'everyPage',
      pageBreak: 'auto',
      tableWidth: 'auto',
      columnStyles: {
        0: { halign: 'center', cellWidth: serialColWidth } // S.No column
      }
    };

    // Set individual column widths
    colWidths.forEach((width, index) => {
      if (index > 0) { // Skip S.No column (already set)
        autoTableConfig.columnStyles[index] = {
          cellWidth: width,
          halign: index === 0 ? 'center' : 'left'
        };
      }
    });

    // Generate table
    autoTable(pdf, autoTableConfig);
  }

  /**
   * Add footer to all pages
   * @param {jsPDF} pdf - PDF instance
   * @param {Object} user - User data
   * @param {Object} metadata - Form metadata
   */
  addFooterToAllPages(pdf, user, metadata) {
    const pageCount = pdf.internal.getNumberOfPages();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = this.pageSettings.margin;

    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);

      const footerY = pageHeight - margin.bottom + 5;

      // Footer background
      pdf.setFillColor(...this.colors.lightGray);
      pdf.rect(margin.left, footerY - 3, pageWidth - margin.left - margin.right, 12, 'F');

      // Footer border
      pdf.setDrawColor(...this.colors.text);
      pdf.setLineWidth(0.1);
      pdf.rect(margin.left, footerY - 3, pageWidth - margin.left - margin.right, 12);

      // Footer text
      pdf.setTextColor(...this.colors.text);
      pdf.setFontSize(this.fonts.small);
      pdf.setFont('helvetica', 'normal');

      // Left side - Generated info
      const leftText = `Generated by: ${user?.name || 'UPMRC User'} | ${getCurrentIndianDate(true)}`;
      pdf.text(leftText, margin.left + 2, footerY + 2);

      // Center - Form ID
      if (metadata.formId) {
        pdf.text(`Form ID: ${metadata.formId}`, pageWidth / 2, footerY + 2, { align: 'center' });
      }

      // Right side - Page number
      const rightText = `Page ${i} of ${pageCount}`;
      pdf.text(rightText, pageWidth - margin.right - 2, footerY + 2, { align: 'right' });

      // Company info on bottom
      pdf.setFontSize(this.fonts.small - 1);
      pdf.text(
        'UPMRC - Uttar Pradesh Metro Rail Corporation Limited',
        pageWidth / 2,
        footerY + 7,
        { align: 'center' }
      );
    }
  }

  /**
   * Generate simple PDF for backward compatibility
   * @param {Object} params - Simple generation parameters
   * @returns {Promise<Blob>} PDF blob
   */
  async generateSimplePDF({ data, columns, fileName = 'report.pdf' }) {
    return this.generateFormPDF({
      data,
      columns,
      metadata: {
        formName: fileName.replace('.pdf', ''),
        formId: 'SIMPLE-EXPORT',
        totalRecords: data.length
      },
      template: 'standard'
    });
  }

  /**
   * Download PDF directly
   * @param {Blob} pdfBlob - PDF blob to download
   * @param {string} fileName - File name for download
   */
  downloadPDF(pdfBlob, fileName = 'upmrc-report.pdf') {
    try {
      // Validate blob before creating object URL
      if (!pdfBlob || !(pdfBlob instanceof Blob) || pdfBlob.size === 0) {
        throw new Error('Invalid or empty PDF blob provided for download');
      }

      // Validate fileName
      if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid filename provided for download');
      }

      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;

      // Add to document temporarily for Firefox compatibility
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up object URL
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);

    } catch (error) {
      console.error('PDF download error:', error);
      throw new Error(`Failed to download PDF: ${error.message}`);
    }
  }

  /**
   * Get available templates
   * @returns {Array} Array of template configurations
   */
  getAvailableTemplates() {
    return Object.keys(this.templates).map(key => ({
      key,
      name: this.templates[key].name,
      description: this.getTemplateDescription(key)
    }));
  }

  /**
   * Get template description
   * @param {string} templateKey - Template key
   * @returns {string} Template description
   */
  getTemplateDescription(templateKey) {
    const descriptions = {
      standard: 'General purpose template for most forms',
      maintenance: 'Template for equipment maintenance forms with additional metadata',
      inspection: 'Template for inspection and audit forms with inspection metadata',
      incident: 'Template for incident reports with urgency markers'
    };
    return descriptions[templateKey] || 'Custom template';
  }
}

export default StandardPDFGenerator;