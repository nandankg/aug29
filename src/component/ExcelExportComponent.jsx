import React from "react";
import PropTypes from "prop-types";
import ExcelJS from 'exceljs';
import { RiFileExcel2Fill } from "react-icons/ri";

/**
 * ExcelExportComponent
 * Exports data from any table into an Excel file.
 *
 * Props:
 * - data: Array of objects representing the table data.
 * - columns: Array of column definitions (each with `field` and `headerName`).
 * - fileName: Name of the generated Excel file (default: "table-data.xlsx").
 */
const ExcelExportComponent = ({
  data,
  columns,
  fileName = "table-data.xlsx",
}) => {
  // TODO: Consider making this function async for better error handling
  const handleExport = () => {
    if (!data || !data.length) {
      alert("No data available to export!");
      return;
    }

    // Create a workbook first
    const workbook = new ExcelJS.Workbook();

    // Create a worksheet from the data
    const worksheetData = data.map((row) => {
      const formattedRow = {};
      columns.forEach(({ field, headerName }) => {
        formattedRow[headerName] = row[field] || "";
      });
      return formattedRow;
    });

    // Add worksheet to workbook
    const worksheet = workbook.addWorksheet('Data');
    worksheet.columns = Object.keys(worksheetData[0] || {}).map(key => ({
      header: key,
      key: key
    }));
    worksheet.addRows(worksheetData);

    // Write the Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <button
      onClick={handleExport}
      className="btn"
      style={{ border: "1px solid #0baa9a " }}
    >
      <RiFileExcel2Fill color="#0baa9a " size={25} />
    </button>
  );
};

ExcelExportComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  fileName: PropTypes.string,
};

export default ExcelExportComponent;