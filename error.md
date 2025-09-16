
FIXED: PDF autoTable function error resolved in StandardPDFGenerator.js

Issue: pdf.autoTable is not a function
Cause: Incorrect import syntax for jspdf-autotable in StandardPDFGenerator.js
Solution:
1. Changed import from `import 'jspdf-autotable';` to `import autoTable from 'jspdf-autotable';`
2. Updated usage from `pdf.autoTable(config)` to `autoTable(pdf, config)`

Status: PDF and Excel export functionality restored in StationEarningList.jsx and all forms