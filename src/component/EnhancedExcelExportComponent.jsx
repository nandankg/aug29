import React, { useMemo } from "react";
import PropTypes from "prop-types";
import ExcelJS from 'exceljs';
import { RiFileExcel2Fill } from "react-icons/ri";
import { formatToIndianDate, getCurrentIndianDate } from "../utils/dateUtils";

/**
 * EnhancedExcelExportComponent
 * Exports data from any table into an Excel file with proper metadata and Indian date formatting.
 * Includes employee information, form details, and timestamp in header rows.
 * All dates are converted to dd-mm-yyyy format for Indian users.
 * 
 * Props:
 * - data: Array of objects representing the table data.
 * - columns: Array of column definitions (each with `field` and `headerName`).
 * - fileName: Name of the generated Excel file.
 * - formName: Name of the form for metadata.
 * - formId: Form ID for tracking.
 * - includeSerialNumber: Whether to add S.No column (default: true).
 */
const EnhancedExcelExportComponent = ({
  data,
  columns,
  fileName = "table-data.xlsx",
  formName = "Data Export",
  formId = "",
  includeSerialNumber = true
}) => {
  // Get user data with memoization
  const user = useMemo(() => {
    const userData = localStorage.getItem("userdata");
    return userData ? JSON.parse(userData) : {};
  }, []);

  // Function to convert date values in data to Indian format
  const formatDataDates = (rowData, columns) => {
    const formattedRow = {};
    columns.forEach(({ field, headerName }) => {
      let value = rowData[field] || "";
      // Check if this might be a date field based on field name or value
      if (value && (
        field.toLowerCase().includes('date') ||
        field.toLowerCase().includes('time') ||
        headerName.toLowerCase().includes('date') ||
        headerName.toLowerCase().includes('time')
      )) {
        // Try to format as Indian date
        const indianDate = formatToIndianDate(value);
        if (indianDate) {
          value = indianDate;
        }
      }
      formattedRow[headerName] = value;
    });
    return formattedRow;
  };

  const handleExport = async () => {
    if (!data || !data.length) {
      alert("No data available to export!");
      return;
    }

    try {
      // Create workbook and worksheet
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Data');

      // Prepare column headers
      let finalColumns = [...columns];
      if (includeSerialNumber) {
        finalColumns = [{ field: 'serial', headerName: 'S.No' }, ...columns];
      }

      // Set up worksheet columns
      worksheet.columns = finalColumns.map(col => ({
        header: col.headerName,
        key: col.headerName,
        width: col.headerName === 'S.No' ? 8 : Math.max(col.headerName.length + 5, 15)
      }));

      // Get current date/time
      const currentDateTime = getCurrentIndianDate(true);
      const exportDate = getCurrentIndianDate(false);

      // Add metadata header rows
      const metadataRows = [
        // Title row
        { [finalColumns[0].headerName]: "UPMRC - Uttar Pradesh Metro Rail Corporation Limited" },
        {}, // Empty row
        { [finalColumns[0].headerName]: "Report Details:", [finalColumns[1]?.headerName]: formName },
        { [finalColumns[0].headerName]: "Form ID:", [finalColumns[1]?.headerName]: formId || "N/A" },
        { [finalColumns[0].headerName]: "Total Records:", [finalColumns[1]?.headerName]: data.length.toString() },
        {}, // Empty row
        { [finalColumns[0].headerName]: "Export Information:" },
        { [finalColumns[0].headerName]: "Exported by:", [finalColumns[1]?.headerName]: user?.name || "Unknown User" },
        { [finalColumns[0].headerName]: "Employee ID:", [finalColumns[1]?.headerName]: user?.employeeid || user?.profileid || "N/A" },
        { [finalColumns[0].headerName]: "Department:", [finalColumns[1]?.headerName]: user?.department || "N/A" },
        { [finalColumns[0].headerName]: "Station:", [finalColumns[1]?.headerName]: user?.station || "N/A" },
        { [finalColumns[0].headerName]: "Export Date:", [finalColumns[1]?.headerName]: exportDate },
        { [finalColumns[0].headerName]: "Export Time:", [finalColumns[1]?.headerName]: currentDateTime },
        {}, // Empty row
        {} // Another empty row before data
      ];

      // Add metadata rows to worksheet
      metadataRows.forEach((row, index) => {
        worksheet.addRow(row);
      });

      // Add data rows with formatting
      data.forEach((row, index) => {
        let formattedRow = formatDataDates(row, columns);
        if (includeSerialNumber) {
          formattedRow = { 'S.No': index + 1, ...formattedRow };
        }
        worksheet.addRow(formattedRow);
      });

      // Style the title row (row 1)
      const titleRow = worksheet.getRow(1);
      titleRow.font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
      titleRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E79' } };
      titleRow.alignment = { horizontal: 'center', vertical: 'middle' };
      
      // Style section headers (rows 3 and 7)
      [3, 7].forEach(rowNum => {
        const row = worksheet.getRow(rowNum);
        row.font = { bold: true, size: 11 };
        row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD5E3F0' } };
        row.alignment = { horizontal: 'left' };
      });

      // Style data rows in metadata section
      [4, 5, 6, 8, 9, 10, 11, 12, 13].forEach(rowNum => {
        const row = worksheet.getRow(rowNum);
        row.font = { size: 10 };
        row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } };
        row.alignment = { horizontal: 'left' };
      });

      // Style the data header row (row after metadata)
      const dataHeaderRowNum = metadataRows.length + 1;
      const dataHeaderRow = worksheet.getRow(dataHeaderRowNum);
      dataHeaderRow.font = { bold: true, size: 11, color: { argb: 'FFFFFFFF' } };
      dataHeaderRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } };
      dataHeaderRow.alignment = { horizontal: 'center', vertical: 'middle' };

      // Add borders to all cells
      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
          cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };
        });
      });

      // Set workbook properties
      workbook.creator = user?.name || 'UPMRC User';
      workbook.lastModifiedBy = user?.name || 'UPMRC User';
      workbook.created = new Date();
      workbook.modified = new Date();
      workbook.subject = `${formName} - UPMRC Report`;
      workbook.title = formName;
      workbook.company = 'Uttar Pradesh Metro Rail Corporation Limited';

      // Generate and download the file
      const finalFilename = fileName.endsWith('.xlsx') ? fileName : `${fileName}.xlsx`;
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = finalFilename;
      a.click();
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Excel export error:", error);
      alert(`Failed to export Excel file: ${error.message}. Please try again or contact support.`);
    }
  };

  return (
    <button
      onClick={handleExport}
      className="btn"
      style={{
        border: "1px solid #0baa9a",
        minWidth: "45px",
        padding: "8px",
        borderRadius: "4px",
        backgroundColor: "#f8f9fa"
      }}
      title={`Export ${formName} to Excel with metadata`}
    >
      <RiFileExcel2Fill color="#0baa9a" size={25} />
    </button>
  );
};

EnhancedExcelExportComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  fileName: PropTypes.string,
  formName: PropTypes.string,
  formId: PropTypes.string,
  includeSerialNumber: PropTypes.bool
};

export default EnhancedExcelExportComponent;