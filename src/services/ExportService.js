/**
 * ExportService.js
 * Universal Export Service for UPMRC Metro Rail Operations System
 *
 * Single entry point for all export operations across the application.
 * Provides consistent export functionality with:
 * - Unified interface for Excel and PDF exports
 * - Automatic metadata management and user context
 * - Error handling and performance monitoring
 * - Export type routing and format validation
 * - Security-focused implementation
 * - Progress tracking and user feedback
 *
 * Replaces scattered export logic across 17 forms
 * Created: September 15, 2025 - Phase 2: Export System Complete Overhaul
 */

import SecureExcelGenerator from './SecureExcelGenerator';
import StandardPDFGenerator from './StandardPDFGenerator';
import { getCurrentIndianDate } from '../utils/dateUtils';

class ExportService {
  constructor() {
    // Lazy-load generators to avoid constructor issues
    this.excelGenerator = null;
    this.pdfGenerator = null;

    // Export types configuration
    this.exportTypes = {
      EXCEL: 'excel',
      PDF: 'pdf',
      BOTH: 'both'
    };

    // PDF templates mapping for different form types
    this.formTemplateMapping = {
      // AFC Forms
      'afc-sdc-shift-log': 'maintenance',
      'afc-sdc-pm-logbook': 'maintenance',
      'afc-mainline-fmts': 'maintenance',
      'afc-mainline-pm': 'maintenance',
      'afc-imprest-register': 'standard',

      // Telecom Forms
      'telecom-officer-colony': 'standard',
      'telecom-inspection': 'inspection',
      'telecom-ups-maintenance': 'maintenance',
      'telecom-checklist-pm': 'maintenance',
      'telecom-pm-occ-bcc': 'maintenance',

      // Signalling Forms
      'signalling-station-diary': 'standard',
      'signalling-hardware-failure': 'incident',
      'signalling-incident-register': 'incident',
      'signalling-quarterly-inspection': 'inspection',
      'signalling-pm-point-machine': 'maintenance',

      // Default for unlisted forms
      'default': 'standard'
    };

    // Performance monitoring
    this.performanceMetrics = {
      totalExports: 0,
      successfulExports: 0,
      failedExports: 0,
      averageExportTime: 0,
      exportTimes: []
    };
  }

  /**
   * Get Excel generator instance (lazy-loaded)
   * @returns {SecureExcelGenerator} Excel generator instance
   */
  getExcelGenerator() {
    if (!this.excelGenerator) {
      this.excelGenerator = new SecureExcelGenerator();
    }
    return this.excelGenerator;
  }

  /**
   * Get PDF generator instance (lazy-loaded)
   * @returns {StandardPDFGenerator} PDF generator instance
   */
  getPDFGenerator() {
    if (!this.pdfGenerator) {
      this.pdfGenerator = new StandardPDFGenerator();
    }
    return this.pdfGenerator;
  }

  /**
   * Main export method - handles all export requests
   * @param {Object} params - Export parameters
   * @param {Array} params.data - Form data to export
   * @param {Array} params.columns - Column definitions
   * @param {string} params.exportType - Type of export (excel, pdf, both)
   * @param {Object} params.metadata - Form metadata
   * @param {Object} params.options - Additional export options
   * @returns {Promise<Object>} Export result with download links/blobs
   */
  async exportForm({
    data,
    columns,
    exportType = this.exportTypes.EXCEL,
    metadata = {},
    options = {}
  }) {
    const startTime = performance.now();

    try {
      // Validate inputs
      this.validateExportRequest({ data, columns, exportType, metadata });

      // Prepare export context
      const exportContext = await this.prepareExportContext(metadata);

      // Prepare enhanced metadata
      const enhancedMetadata = this.enhanceMetadata(metadata, exportContext, data.length);

      // Initialize progress tracking
      if (options.onProgress) {
        options.onProgress({ stage: 'preparation', progress: 10 });
      }

      let result = {};

      // Handle different export types
      switch (exportType.toLowerCase()) {
        case this.exportTypes.EXCEL:
          result = await this.handleExcelExport({
            data, columns, metadata: enhancedMetadata, options
          });
          break;

        case this.exportTypes.PDF:
          result = await this.handlePDFExport({
            data, columns, metadata: enhancedMetadata, options
          });
          break;

        case this.exportTypes.BOTH:
          result = await this.handleBothExports({
            data, columns, metadata: enhancedMetadata, options
          });
          break;

        default:
          throw new Error(`Unsupported export type: ${exportType}`);
      }

      // Record performance metrics
      this.recordPerformanceMetrics(startTime, true);

      // Update progress to completion
      if (options.onProgress) {
        options.onProgress({ stage: 'completed', progress: 100 });
      }

      return {
        success: true,
        exportType,
        ...result,
        metadata: enhancedMetadata,
        timestamp: getCurrentIndianDate(true)
      };

    } catch (error) {
      // Record failed export
      this.recordPerformanceMetrics(startTime, false);

      console.error('Export service error:', error);

      // Update progress with error
      if (options.onProgress) {
        options.onProgress({
          stage: 'error',
          progress: 0,
          error: error.message
        });
      }

      throw new Error(`Export failed: ${error.message}`);
    }
  }

  /**
   * Validate export request parameters
   * @param {Object} params - Request parameters to validate
   */
  validateExportRequest({ data, columns, exportType, metadata }) {
    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid or empty data provided for export');
    }

    if (!columns || !Array.isArray(columns) || columns.length === 0) {
      throw new Error('Invalid or empty column definitions provided');
    }

    if (!Object.values(this.exportTypes).includes(exportType.toLowerCase())) {
      throw new Error(`Invalid export type: ${exportType}. Supported types: ${Object.values(this.exportTypes).join(', ')}`);
    }

    // Validate column structure
    const invalidColumns = columns.filter(col =>
      !col.field || !col.headerName ||
      typeof col.field !== 'string' ||
      typeof col.headerName !== 'string'
    );

    if (invalidColumns.length > 0) {
      throw new Error('Invalid column definitions: columns must have "field" and "headerName" properties');
    }

    // Validate data structure
    if (data.length > 0) {
      const firstRow = data[0];
      const missingFields = columns.filter(col =>
        !(col.field in firstRow)
      );

      if (missingFields.length > 0) {
        console.warn('Some columns have no corresponding data fields:', missingFields.map(col => col.field));
      }
    }
  }

  /**
   * Prepare export context with user and system information
   * @param {Object} metadata - Original metadata
   * @returns {Promise<Object>} Enhanced export context
   */
  async prepareExportContext(metadata) {
    try {
      // Get user data
      const userData = this.getUserData();

      // Get system information
      const systemInfo = {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        exportVersion: '2.0'
      };

      // Get form-specific context
      const formContext = await this.getFormContext(metadata.formId);

      return {
        user: userData,
        system: systemInfo,
        form: formContext,
        session: this.getSessionInfo()
      };

    } catch (error) {
      console.warn('Failed to prepare full export context:', error);
      return {
        user: this.getUserData(),
        system: { exportVersion: '2.0' },
        form: {},
        session: {}
      };
    }
  }

  /**
   * Get user data from localStorage
   * @returns {Object} User data
   */
  getUserData() {
    try {
      const userData = localStorage.getItem('userdata');
      return userData ? JSON.parse(userData) : {};
    } catch (error) {
      console.warn('Failed to get user data:', error);
      return {};
    }
  }

  /**
   * Get form-specific context information
   * @param {string} formId - Form identifier
   * @returns {Promise<Object>} Form context
   */
  async getFormContext(formId) {
    try {
      // This could be enhanced to fetch form-specific metadata from API
      return {
        formId: formId || 'unknown',
        template: this.getTemplateForForm(formId),
        category: this.getCategoryForForm(formId),
        module: this.getModuleForForm(formId)
      };
    } catch (error) {
      console.warn('Failed to get form context:', error);
      return { formId: formId || 'unknown' };
    }
  }

  /**
   * Get session information
   * @returns {Object} Session information
   */
  getSessionInfo() {
    try {
      return {
        sessionId: sessionStorage.getItem('sessionId') || 'unknown',
        loginTime: sessionStorage.getItem('loginTime') || new Date().toISOString(),
        lastActivity: new Date().toISOString()
      };
    } catch (error) {
      return { sessionId: 'unknown' };
    }
  }

  /**
   * Enhance metadata with additional context
   * @param {Object} metadata - Original metadata
   * @param {Object} context - Export context
   * @param {number} recordCount - Number of records
   * @returns {Object} Enhanced metadata
   */
  enhanceMetadata(metadata, context, recordCount) {
    return {
      ...metadata,
      totalRecords: recordCount,
      exportedBy: context.user?.name || 'Unknown User',
      employeeId: context.user?.employeeid || context.user?.profileid || 'N/A',
      department: context.user?.department || 'N/A',
      station: context.user?.station || 'N/A',
      exportDate: getCurrentIndianDate(false),
      exportTime: getCurrentIndianDate(true),
      exportVersion: context.system?.exportVersion || '2.0',
      formId: metadata.formId || context.form?.formId || 'unknown',
      template: metadata.template || context.form?.template || 'standard',
      module: context.form?.module || 'general'
    };
  }

  /**
   * Handle Excel export
   * @param {Object} params - Excel export parameters
   * @returns {Promise<Object>} Excel export result
   */
  async handleExcelExport({ data, columns, metadata, options }) {
    try {
      if (options.onProgress) {
        options.onProgress({ stage: 'excel_generation', progress: 30 });
      }

      const excelBlob = await this.getExcelGenerator().generateFormExport(
        { data, headers: columns },
        metadata,
        { includeSerialNumber: options.includeSerialNumber !== false }
      );

      // Validate generated blob
      if (!excelBlob || !(excelBlob instanceof Blob) || excelBlob.size === 0) {
        throw new Error('Excel generator returned invalid or empty blob');
      }

      if (options.onProgress) {
        options.onProgress({ stage: 'excel_ready', progress: 80 });
      }

      // Auto-download if requested
      if (options.autoDownload !== false) {
        this.downloadFile(excelBlob, this.generateFileName(metadata, 'xlsx'));
      }

      return {
        excelBlob,
        fileName: this.generateFileName(metadata, 'xlsx'),
        size: excelBlob.size
      };

    } catch (error) {
      throw new Error(`Excel export failed: ${error.message}`);
    }
  }

  /**
   * Handle PDF export
   * @param {Object} params - PDF export parameters
   * @returns {Promise<Object>} PDF export result
   */
  async handlePDFExport({ data, columns, metadata, options }) {
    try {
      if (options.onProgress) {
        options.onProgress({ stage: 'pdf_generation', progress: 30 });
      }

      const template = metadata.template || this.getTemplateForForm(metadata.formId);
      const orientation = options.orientation || 'portrait';

      const pdfBlob = await this.getPDFGenerator().generateFormPDF({
        data,
        columns,
        metadata,
        template,
        orientation
      });

      // Validate generated blob
      if (!pdfBlob || !(pdfBlob instanceof Blob) || pdfBlob.size === 0) {
        throw new Error('PDF generator returned invalid or empty blob');
      }

      if (options.onProgress) {
        options.onProgress({ stage: 'pdf_ready', progress: 80 });
      }

      // Auto-download if requested
      if (options.autoDownload !== false) {
        this.downloadFile(pdfBlob, this.generateFileName(metadata, 'pdf'));
      }

      return {
        pdfBlob,
        fileName: this.generateFileName(metadata, 'pdf'),
        size: pdfBlob.size,
        template
      };

    } catch (error) {
      throw new Error(`PDF export failed: ${error.message}`);
    }
  }

  /**
   * Handle both Excel and PDF exports
   * @param {Object} params - Export parameters
   * @returns {Promise<Object>} Combined export result
   */
  async handleBothExports({ data, columns, metadata, options }) {
    try {
      if (options.onProgress) {
        options.onProgress({ stage: 'dual_export_start', progress: 20 });
      }

      // Generate both exports in parallel for better performance
      const [excelResult, pdfResult] = await Promise.all([
        this.handleExcelExport({
          data,
          columns,
          metadata,
          options: { ...options, autoDownload: false, onProgress: null }
        }),
        this.handlePDFExport({
          data,
          columns,
          metadata,
          options: { ...options, autoDownload: false, onProgress: null }
        })
      ]);

      if (options.onProgress) {
        options.onProgress({ stage: 'dual_export_ready', progress: 90 });
      }

      // Validate both results before downloading
      if (!excelResult.excelBlob || !pdfResult.pdfBlob) {
        throw new Error('One or both export blobs are invalid');
      }

      // Auto-download both if requested
      if (options.autoDownload !== false) {
        try {
          this.downloadFile(excelResult.excelBlob, excelResult.fileName);

          // Delay PDF download slightly to avoid browser blocking
          setTimeout(() => {
            try {
              this.downloadFile(pdfResult.pdfBlob, pdfResult.fileName);
            } catch (pdfDownloadError) {
              console.error('PDF download failed:', pdfDownloadError);
              alert(`PDF download failed: ${pdfDownloadError.message}`);
            }
          }, 500);
        } catch (excelDownloadError) {
          console.error('Excel download failed:', excelDownloadError);
          alert(`Excel download failed: ${excelDownloadError.message}`);
        }
      }

      return {
        excel: excelResult,
        pdf: pdfResult,
        totalSize: excelResult.size + pdfResult.size
      };

    } catch (error) {
      throw new Error(`Dual export failed: ${error.message}`);
    }
  }

  /**
   * Download file blob
   * @param {Blob} blob - File blob to download
   * @param {string} fileName - File name
   */
  downloadFile(blob, fileName) {
    try {
      // Validate blob before creating object URL
      if (!blob || !(blob instanceof Blob) || blob.size === 0) {
        throw new Error('Invalid or empty blob provided for download');
      }

      // Validate fileName
      if (!fileName || typeof fileName !== 'string') {
        throw new Error('Invalid filename provided for download');
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;

      // Add to document temporarily for Firefox compatibility
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up object URL
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);

    } catch (error) {
      console.error('Download failed:', error);
      throw new Error(`Download failed: ${error.message}`);
    }
  }

  /**
   * Generate appropriate file name for export
   * @param {Object} metadata - Export metadata
   * @param {string} extension - File extension
   * @returns {string} Generated file name
   */
  generateFileName(metadata, extension) {
    const formName = metadata.formName || 'upmrc-export';
    const date = getCurrentIndianDate(false).replace(/[/\s:]/g, '-');
    const station = metadata.station ? `-${metadata.station}` : '';

    return `${formName}${station}-${date}.${extension}`;
  }

  /**
   * Get appropriate PDF template for form
   * @param {string} formId - Form identifier
   * @returns {string} Template name
   */
  getTemplateForForm(formId) {
    if (!formId) return 'standard';

    const lowercaseFormId = formId.toLowerCase();

    for (const [pattern, template] of Object.entries(this.formTemplateMapping)) {
      if (pattern !== 'default' && lowercaseFormId.includes(pattern)) {
        return template;
      }
    }

    return this.formTemplateMapping.default;
  }

  /**
   * Get category for form (for organization)
   * @param {string} formId - Form identifier
   * @returns {string} Form category
   */
  getCategoryForForm(formId) {
    if (!formId) return 'general';

    const lowercaseFormId = formId.toLowerCase();

    if (lowercaseFormId.includes('afc')) return 'afc';
    if (lowercaseFormId.includes('telecom')) return 'telecom';
    if (lowercaseFormId.includes('signalling') || lowercaseFormId.includes('signal')) return 'signalling';
    if (lowercaseFormId.includes('maintenance') || lowercaseFormId.includes('pm')) return 'maintenance';
    if (lowercaseFormId.includes('incident') || lowercaseFormId.includes('accident')) return 'safety';
    if (lowercaseFormId.includes('inspection')) return 'inspection';

    return 'general';
  }

  /**
   * Get module for form (for organization)
   * @param {string} formId - Form identifier
   * @returns {string} Form module
   */
  getModuleForForm(formId) {
    const category = this.getCategoryForForm(formId);

    const moduleMapping = {
      'afc': 'AFC Systems',
      'telecom': 'Telecommunications',
      'signalling': 'Signalling & Safety',
      'maintenance': 'Maintenance Operations',
      'safety': 'Safety & Incidents',
      'inspection': 'Quality Inspection',
      'general': 'General Operations'
    };

    return moduleMapping[category] || 'General Operations';
  }

  /**
   * Record performance metrics
   * @param {number} startTime - Export start time
   * @param {boolean} success - Whether export was successful
   */
  recordPerformanceMetrics(startTime, success) {
    const endTime = performance.now();
    const exportTime = endTime - startTime;

    this.performanceMetrics.totalExports++;

    if (success) {
      this.performanceMetrics.successfulExports++;
      this.performanceMetrics.exportTimes.push(exportTime);

      // Keep only last 100 export times for average calculation
      if (this.performanceMetrics.exportTimes.length > 100) {
        this.performanceMetrics.exportTimes = this.performanceMetrics.exportTimes.slice(-100);
      }

      this.performanceMetrics.averageExportTime =
        this.performanceMetrics.exportTimes.reduce((a, b) => a + b, 0) /
        this.performanceMetrics.exportTimes.length;
    } else {
      this.performanceMetrics.failedExports++;
    }
  }

  /**
   * Get performance metrics
   * @returns {Object} Current performance metrics
   */
  getPerformanceMetrics() {
    return {
      ...this.performanceMetrics,
      successRate: this.performanceMetrics.totalExports > 0
        ? (this.performanceMetrics.successfulExports / this.performanceMetrics.totalExports) * 100
        : 0
    };
  }

  /**
   * Get available export types
   * @returns {Array} Available export types
   */
  getAvailableExportTypes() {
    return Object.entries(this.exportTypes).map(([key, value]) => ({
      key,
      value,
      label: key.charAt(0) + key.slice(1).toLowerCase()
    }));
  }

  /**
   * Get available PDF templates
   * @returns {Array} Available PDF templates
   */
  getAvailablePDFTemplates() {
    return this.getPDFGenerator().getAvailableTemplates();
  }
}

// Create and export singleton instance
const exportService = new ExportService();
export default exportService;