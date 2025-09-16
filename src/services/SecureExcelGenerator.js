/**
 * SecureExcelGenerator - Universal Excel export engine for UPMRC system
 * Provides secure, standardized Excel generation with proper metadata and formatting
 * Replaces vulnerable xlsx library usage with secure exceljs implementation
 */

import ExcelJS from 'exceljs';
import { formatToIndianDate, getCurrentIndianDate } from '../utils/dateUtils';

class SecureExcelGenerator {
  constructor() {
    this.workbook = null;
    this.defaultStyles = {
      // UPMRC Header Styles
      upmrcHeader: {
        font: { bold: true, size: 16, color: { argb: 'FF000080' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } },
        alignment: { horizontal: 'center', vertical: 'middle' },
        border: {
          top: { style: 'thick' },
          left: { style: 'thick' },
          bottom: { style: 'thick' },
          right: { style: 'thick' }
        }
      },

      // Form Title Styles
      formTitle: {
        font: { bold: true, size: 14, color: { argb: 'FF000080' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } },
        alignment: { horizontal: 'center', vertical: 'middle' },
        border: {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' }
        }
      },

      // Metadata Styles
      metadata: {
        font: { bold: true, size: 11, color: { argb: 'FF000040' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFAFAFA' } },
        alignment: { horizontal: 'left', vertical: 'middle' },
        border: {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        }
      },

      // Data Header Styles
      dataHeader: {
        font: { bold: true, size: 12, color: { argb: 'FFFFFFFF' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } },
        alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
        border: {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' }
        }
      },

      // Data Cell Styles
      dataCell: {
        font: { size: 10, color: { argb: 'FF000000' } },
        alignment: { horizontal: 'left', vertical: 'middle', wrapText: true },
        border: {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        }
      },

      // Alternating Row Styles
      alternateRow: {
        font: { size: 10, color: { argb: 'FF000000' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F8F8' } },
        alignment: { horizontal: 'left', vertical: 'middle', wrapText: true },
        border: {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        }
      },

      // Footer Styles
      footer: {
        font: { italic: true, size: 9, color: { argb: 'FF666666' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEEEEE' } },
        alignment: { horizontal: 'left', vertical: 'middle' },
        border: {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        }
      }
    };
  }

  /**
   * Initialize a new workbook
   */
  initializeWorkbook() {
    this.workbook = new ExcelJS.Workbook();
    this.workbook.creator = 'UPMRC Metro Rail Operations System';
    this.workbook.lastModifiedBy = 'UPMRC System';
    this.workbook.created = new Date();
    this.workbook.modified = new Date();
    this.workbook.lastPrinted = new Date();
  }

  /**
   * Generate complete form export with UPMRC branding and metadata
   */
  async generateFormExport(formData, metadata, options = {}) {
    try {
      this.initializeWorkbook();

      const {
        includeSerialNumber = true,
        customStyles = {},
        templateType = 'standard'
      } = options;

      // Merge custom styles with defaults
      const styles = { ...this.defaultStyles, ...customStyles };

      // Create worksheet
      const worksheet = this.workbook.addWorksheet(metadata.formTitle || metadata.formName || 'UPMRC Export', {
        pageSetup: {
          paperSize: 9, // A4
          orientation: 'landscape',
          fitToPage: true,
          fitToHeight: 0,
          fitToWidth: 1,
          margins: {
            left: 0.7,
            right: 0.7,
            top: 0.75,
            bottom: 0.75,
            header: 0.3,
            footer: 0.3
          }
        },
        headerFooter: {
          firstHeader: this.generatePrintHeader(metadata),
          firstFooter: this.generatePrintFooter(metadata)
        }
      });

      let currentRow = 1;

      // Add UPMRC header section
      currentRow = this.addUMPRCHeader(worksheet, metadata, currentRow, styles);

      // Add metadata section
      currentRow = this.addMetadataSection(worksheet, metadata, currentRow, styles);

      // Add data section
      const dataStartRow = currentRow + 2;
      currentRow = this.addDataSection(
        worksheet,
        formData,
        metadata,
        dataStartRow,
        styles,
        includeSerialNumber
      );

      // Add footer section
      currentRow = this.addFooterSection(worksheet, metadata, currentRow + 2, styles);

      // Apply auto-sizing and formatting
      this.applyFinalFormatting(worksheet, metadata);

      // Generate buffer and convert to blob for download
      const buffer = await this.workbook.xlsx.writeBuffer();

      // Convert buffer to blob
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      return blob;

    } catch (error) {
      console.error('[SecureExcelGenerator] Export generation failed:', error);
      throw new Error(`Excel export failed: ${error.message}`);
    }
  }

  /**
   * Add UPMRC header section
   */
  addUMPRCHeader(worksheet, metadata, startRow, styles) {
    // Main UPMRC header
    const headerCell = worksheet.getCell(startRow, 1);
    headerCell.value = 'UPMRC - UTTAR PRADESH METRO RAIL CORPORATION LIMITED';
    headerCell.style = styles.upmrcHeader;

    // Merge cells for header
    const headerEndCol = metadata.columns?.length || 8;
    worksheet.mergeCells(startRow, 1, startRow, headerEndCol);

    // Form title
    const titleCell = worksheet.getCell(startRow + 1, 1);
    titleCell.value = metadata.formTitle || metadata.formName || 'Metro Rail Operations Report';
    titleCell.style = styles.formTitle;
    worksheet.mergeCells(startRow + 1, 1, startRow + 1, headerEndCol);

    return startRow + 3;
  }

  /**
   * Add metadata section
   */
  addMetadataSection(worksheet, metadata, startRow, styles) {
    const metadataRows = [
      ['Station:', metadata.station || 'N/A', 'Report Date:', metadata.reportDate || getCurrentIndianDate()],
      ['Employee ID:', metadata.empId || 'N/A', 'Employee Name:', metadata.empName || 'N/A'],
      ['Form ID:', metadata.formId || 'N/A', 'Generated On:', getCurrentIndianDate()],
      ['Department:', metadata.department || 'Operations', 'Module:', metadata.module || 'General']
    ];

    metadataRows.forEach((row, index) => {
      row.forEach((value, colIndex) => {
        const cell = worksheet.getCell(startRow + index, colIndex + 1);
        cell.value = value;
        cell.style = styles.metadata;

        // Bold labels (even columns)
        if (colIndex % 2 === 0) {
          cell.font = { ...cell.font, bold: true };
        }
      });
    });

    return startRow + metadataRows.length + 1;
  }

  /**
   * Add data section with proper formatting
   */
  addDataSection(worksheet, formData, metadata, startRow, styles, includeSerialNumber) {
    if (!formData || !formData.data || !Array.isArray(formData.data)) {
      throw new Error('Invalid form data structure');
    }

    let columns = formData.headers || metadata.columns || [];
    let data = formData.data;

    // Add serial number column if requested
    if (includeSerialNumber) {
      columns = [{ field: 'serialNumber', headerName: 'S.No.' }, ...columns];
      data = data.map((row, index) => ({
        serialNumber: index + 1,
        ...row
      }));
    }

    // Add headers
    columns.forEach((column, index) => {
      const cell = worksheet.getCell(startRow, index + 1);
      cell.value = column.headerName || column.header || column.field;
      cell.style = styles.dataHeader;
    });

    // Add data rows
    data.forEach((row, rowIndex) => {
      columns.forEach((column, colIndex) => {
        const cell = worksheet.getCell(startRow + rowIndex + 1, colIndex + 1);
        let value = row[column.field] || '';

        // Format dates to Indian format
        if (this.isDateField(column.field, column.headerName)) {
          const indianDate = formatToIndianDate(value);
          if (indianDate) {
            value = indianDate;
          }
        }

        cell.value = value;

        // Apply alternating row styles
        if (rowIndex % 2 === 0) {
          cell.style = styles.dataCell;
        } else {
          cell.style = styles.alternateRow;
        }
      });
    });

    return startRow + data.length + 1;
  }

  /**
   * Add footer section
   */
  addFooterSection(worksheet, metadata, startRow, styles) {
    const footerRows = [
      ['Generated by UPMRC Metro Rail Operations System'],
      [`Export Date: ${getCurrentIndianDate()}  |  Export Time: ${new Date().toLocaleTimeString()}`],
      [`User: ${metadata.empName} (${metadata.empId})  |  Form: ${metadata.formId}`],
      [`Session: ${this.getSessionId()}  |  System Version: ${this.getSystemVersion()}`]
    ];

    footerRows.forEach((row, index) => {
      const cell = worksheet.getCell(startRow + index, 1);
      cell.value = row[0];
      cell.style = styles.footer;

      // Merge cells for footer
      const endCol = metadata.columns?.length || 8;
      worksheet.mergeCells(startRow + index, 1, startRow + index, endCol);
    });

    return startRow + footerRows.length;
  }

  /**
   * Apply final formatting and auto-sizing
   */
  applyFinalFormatting(worksheet, metadata) {
    // Auto-fit columns
    worksheet.columns.forEach((column, index) => {
      let maxLength = 0;

      // Check header length
      const headerCell = worksheet.getCell(1, index + 1);
      if (headerCell.value) {
        maxLength = Math.max(maxLength, headerCell.value.toString().length);
      }

      // Check data length
      worksheet.eachRow((row, rowNumber) => {
        const cell = row.getCell(index + 1);
        if (cell.value) {
          const cellLength = cell.value.toString().length;
          maxLength = Math.max(maxLength, cellLength);
        }
      });

      // Set column width with limits
      column.width = Math.min(Math.max(maxLength + 2, 10), 50);
    });

    // Set row heights
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber <= 2) {
        row.height = 25; // Header rows
      } else if (rowNumber <= 6) {
        row.height = 20; // Metadata rows
      } else {
        row.height = 18; // Data rows
      }
    });

    // Freeze header rows
    worksheet.views = [
      {
        state: 'frozen',
        xSplit: 0,
        ySplit: 7, // Freeze above data section
        topLeftCell: 'A8',
        activeCell: 'A1'
      }
    ];

    // Add print settings
    worksheet.pageSetup.printArea = `A1:${this.getColumnLetter(metadata.columns?.length || 8)}${worksheet.rowCount}`;
    worksheet.pageSetup.printTitlesRow = '1:7'; // Repeat header rows on each page
  }

  /**
   * Generate print header
   */
  generatePrintHeader(metadata) {
    return `&C&B&18UPMRC - ${metadata.formTitle || metadata.formName || 'Operations Report'}`;
  }

  /**
   * Generate print footer
   */
  generatePrintFooter(metadata) {
    return `&L${metadata.empName} (${metadata.empId})&C&P of &N&R${getCurrentIndianDate()}`;
  }

  /**
   * Check if field is a date field
   */
  isDateField(fieldName, headerName) {
    const dateIndicators = ['date', 'time', 'created', 'updated', 'modified'];
    const fieldLower = (fieldName || '').toLowerCase();
    const headerLower = (headerName || '').toLowerCase();

    return dateIndicators.some(indicator =>
      fieldLower.includes(indicator) || headerLower.includes(indicator)
    );
  }

  /**
   * Get column letter for Excel column reference
   */
  getColumnLetter(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
      columnNumber--;
      result = String.fromCharCode(65 + (columnNumber % 26)) + result;
      columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
  }

  /**
   * Get session ID
   */
  getSessionId() {
    return sessionStorage.getItem('upmrc_session_id') || 'unknown';
  }

  /**
   * Get system version
   */
  getSystemVersion() {
    return process.env.REACT_APP_VERSION || '1.0.0';
  }

  /**
   * Generate simple Excel export (backward compatibility)
   */
  async generateSimpleExport(data, columns, fileName = 'export.xlsx') {
    try {
      this.initializeWorkbook();

      const worksheet = this.workbook.addWorksheet('Data');

      // Add headers
      const headers = columns.map(col => col.headerName || col.header || col.field);
      worksheet.addRow(headers);

      // Style headers
      const headerRow = worksheet.getRow(1);
      headerRow.eachCell((cell) => {
        cell.style = this.defaultStyles.dataHeader;
      });

      // Add data
      data.forEach((row) => {
        const rowData = columns.map(col => row[col.field] || '');
        worksheet.addRow(rowData);
      });

      // Auto-fit columns
      worksheet.columns.forEach((column, index) => {
        let maxLength = 0;
        worksheet.eachRow((row) => {
          const cell = row.getCell(index + 1);
          if (cell.value) {
            maxLength = Math.max(maxLength, cell.value.toString().length);
          }
        });
        column.width = Math.min(Math.max(maxLength + 2, 10), 50);
      });

      // Generate buffer and convert to blob for download
      const buffer = await this.workbook.xlsx.writeBuffer();

      // Convert buffer to blob
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      return blob;

    } catch (error) {
      console.error('[SecureExcelGenerator] Simple export failed:', error);
      throw new Error(`Simple export failed: ${error.message}`);
    }
  }

  /**
   * Create download from buffer
   */
  static triggerDownload(buffer, fileName) {
    try {
      // Validate buffer
      if (!buffer || (buffer.byteLength && buffer.byteLength === 0)) {
        throw new Error('Invalid or empty buffer provided for download');
      }

      // Validate fileName
      if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid filename provided for download');
      }

      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      // Validate generated blob
      if (!blob || blob.size === 0) {
        throw new Error('Failed to create valid blob from buffer');
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up object URL
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);

      console.log(`[SecureExcelGenerator] Download triggered: ${fileName}`);
    } catch (error) {
      console.error('[SecureExcelGenerator] Download failed:', error);
      throw new Error(`Download failed: ${error.message}`);
    }
  }

  /**
   * Validate export data
   */
  static validateExportData(data, columns) {
    if (!data || !Array.isArray(data)) {
      throw new Error('Export data must be an array');
    }

    if (!columns || !Array.isArray(columns)) {
      throw new Error('Columns definition must be an array');
    }

    if (data.length === 0) {
      throw new Error('No data available to export');
    }

    if (columns.length === 0) {
      throw new Error('No columns defined for export');
    }

    // Validate column structure
    columns.forEach((col, index) => {
      if (!col.field && !col.headerName) {
        throw new Error(`Invalid column definition at index ${index}`);
      }
    });

    return true;
  }
}

// Create singleton instance
const secureExcelGenerator = new SecureExcelGenerator();

// Named exports
export { SecureExcelGenerator };

// Utility functions
export const generateStandardExport = async (data, columns, metadata, options) => {
  return await secureExcelGenerator.generateFormExport({ data, headers: columns }, metadata, options);
};

export const generateSimpleExport = async (data, columns, fileName) => {
  return await secureExcelGenerator.generateSimpleExport(data, columns, fileName);
};

export const downloadExcel = (buffer, fileName) => {
  SecureExcelGenerator.triggerDownload(buffer, fileName);
};

export const validateExportData = (data, columns) => {
  return SecureExcelGenerator.validateExportData(data, columns);
};

// Default export for the class
export default SecureExcelGenerator;