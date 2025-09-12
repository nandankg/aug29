#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to find files that import xlsx
function findXlsxFiles(directory) {
  return new Promise((resolve, reject) => {
    glob(`${directory}/**/*.{js,jsx}`, { ignore: ['**/node_modules/**', '**/build/**'] }, (err, files) => {
      if (err) reject(err);
      else {
        const xlsxFiles = files.filter(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            return content.includes('import') && (content.includes('xlsx') || content.includes('XLSX'));
          } catch (error) {
            return false;
          }
        });
        resolve(xlsxFiles);
      }
    });
  });
}

// Function to replace xlsx usage with exceljs
function replaceXlsxUsage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses xlsx
    if (!content.includes('xlsx') && !content.includes('XLSX')) {
      return { processed: false, changes: [] };
    }
    
    let updatedContent = content;
    const changes = [];
    
    // Replace import statements
    if (content.match(/import\s+.*xlsx.*/i)) {
      updatedContent = updatedContent.replace(
        /import\s+\*\s+as\s+XLSX\s+from\s+['"']xlsx['"];?\s*\n?/gi,
        "import ExcelJS from 'exceljs';\n"
      );
      updatedContent = updatedContent.replace(
        /import\s+XLSX\s+from\s+['"']xlsx['"];?\s*\n?/gi,
        "import ExcelJS from 'exceljs';\n"
      );
      changes.push('Replaced xlsx import with exceljs');
    }
    
    // Replace common xlsx usage patterns with exceljs equivalents
    // Pattern 1: XLSX.utils.book_new()
    if (content.includes('XLSX.utils.book_new()')) {
      updatedContent = updatedContent.replace(
        /const\s+(\w+)\s*=\s*XLSX\.utils\.book_new\(\);?\s*/gi,
        'const $1 = new ExcelJS.Workbook();'
      );
      changes.push('Replaced XLSX.utils.book_new() with new ExcelJS.Workbook()');
    }
    
    // Pattern 2: XLSX.utils.json_to_sheet()
    if (content.includes('XLSX.utils.json_to_sheet')) {
      // This is more complex as it requires worksheet creation
      updatedContent = updatedContent.replace(
        /const\s+(\w+)\s*=\s*XLSX\.utils\.json_to_sheet\(([^)]+)\);?\s*/gi,
        `const $1 = workbook.addWorksheet('Data');
         $1.columns = Object.keys($2[0] || {}).map(key => ({ header: key, key: key }));
         $1.addRows($2);`
      );
      changes.push('Replaced XLSX.utils.json_to_sheet() with ExcelJS worksheet creation');
    }
    
    // Pattern 3: XLSX.utils.book_append_sheet()
    if (content.includes('XLSX.utils.book_append_sheet')) {
      updatedContent = updatedContent.replace(
        /XLSX\.utils\.book_append_sheet\([^)]+\);?\s*/gi,
        '// Worksheet already added to workbook above'
      );
      changes.push('Removed XLSX.utils.book_append_sheet() - handled by ExcelJS automatically');
    }
    
    // Pattern 4: XLSX.writeFile()
    if (content.includes('XLSX.writeFile')) {
      updatedContent = updatedContent.replace(
        /XLSX\.writeFile\((\w+),\s*([^)]+)\);?\s*/gi,
        `$1.xlsx.writeBuffer().then(buffer => {
          const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = $2;
          a.click();
          URL.revokeObjectURL(url);
        });`
      );
      changes.push('Replaced XLSX.writeFile() with ExcelJS buffer-based download');
    }
    
    // Add error handling and async support if needed
    if (changes.length > 0) {
      // Add async to function if not present and we're using promises
      if (updatedContent.includes('.then(') && !updatedContent.includes('async ')) {
        updatedContent = updatedContent.replace(
          /(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{)/g,
          '$1 // TODO: Consider making this function async for better error handling'
        );
      }
    }
    
    // Only write if content changed
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      return { processed: true, changes };
    }
    
    return { processed: false, changes: [] };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return { processed: false, changes: [], error: error.message };
  }
}

// Main execution
async function main() {
  console.log('🔄 Starting xlsx to exceljs migration...\n');
  
  try {
    const files = await findXlsxFiles('./src');
    
    if (files.length === 0) {
      console.log('✅ No files found using xlsx package');
      return;
    }
    
    console.log(`📁 Found ${files.length} files using xlsx package:\n`);
    files.forEach(file => console.log(`  - ${file}`));
    console.log('');
    
    let totalProcessed = 0;
    let totalChanges = 0;
    const errors = [];
    
    for (const file of files) {
      const result = replaceXlsxUsage(file);
      
      if (result.error) {
        errors.push({ file, error: result.error });
      } else if (result.processed) {
        totalProcessed++;
        totalChanges += result.changes.length;
        console.log(`✅ ${file}:`);
        result.changes.forEach(change => console.log(`   - ${change}`));
      } else {
        console.log(`ℹ️  ${file}: No changes needed`);
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`- Files found with xlsx: ${files.length}`);
    console.log(`- Files processed: ${totalProcessed}`);
    console.log(`- Total changes made: ${totalChanges}`);
    console.log(`- Errors encountered: ${errors.length}`);
    
    if (errors.length > 0) {
      console.log('\n❌ Errors:');
      errors.forEach(({ file, error }) => {
        console.log(`   ${file}: ${error}`);
      });
    }
    
    console.log('\n⚠️  Important Notes:');
    console.log('- Review the generated ExcelJS code for correctness');
    console.log('- Test Excel export functionality thoroughly');
    console.log('- Consider removing xlsx from package.json: npm uninstall xlsx');
    console.log('- Some complex xlsx patterns may require manual adjustment');
    
    // Write summary to file
    const summary = {
      timestamp: new Date().toISOString(),
      filesFound: files.length,
      filesProcessed: totalProcessed,
      totalChanges: totalChanges,
      errors: errors.length,
      errorDetails: errors,
      processedFiles: files
    };
    
    fs.writeFileSync('./xlsx-migration-summary.json', JSON.stringify(summary, null, 2));
    console.log('\n📄 Summary saved to xlsx-migration-summary.json');
    
  } catch (error) {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { replaceXlsxUsage, findXlsxFiles };