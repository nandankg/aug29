#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to recursively find all JS/JSX files
function findJSFiles(directory) {
  return new Promise((resolve, reject) => {
    glob(`${directory}/**/*.{js,jsx}`, { ignore: ['**/node_modules/**', '**/build/**'] }, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
}

// Function to remove console statements from a file
function removeConsoleStatements(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count console statements before removal
    const consoleMatches = content.match(/console\.(log|warn|error|info|debug|trace|time|timeEnd|group|groupEnd|table|assert|count|dir|dirxml)\s*\([^)]*\);?/g);
    const consoleCount = consoleMatches ? consoleMatches.length : 0;
    
    if (consoleCount === 0) return { processed: false, removed: 0 };
    
    // Remove console statements but preserve console.warn and console.error for production
    const cleanedContent = content.replace(
      /console\.(log|info|debug|trace|time|timeEnd|group|groupEnd|table|assert|count|dir|dirxml)\s*\([^)]*\);?\s*\n?/g,
      ''
    );
    
    // Remove empty lines that might be left behind
    const finalContent = cleanedContent.replace(/^\s*\n/gm, '');
    
    // Only write if content changed
    if (content !== finalContent) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      return { processed: true, removed: consoleCount };
    }
    
    return { processed: false, removed: 0 };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return { processed: false, removed: 0, error: error.message };
  }
}

// Main execution
async function main() {
  console.log('🧹 Starting console.log removal process...\n');
  
  try {
    const files = await findJSFiles('./src');
    console.log(`📁 Found ${files.length} JavaScript/JSX files\n`);
    
    let totalProcessed = 0;
    let totalRemoved = 0;
    let errors = [];
    
    for (const file of files) {
      const result = removeConsoleStatements(file);
      
      if (result.error) {
        errors.push({ file, error: result.error });
      } else if (result.processed) {
        totalProcessed++;
        totalRemoved += result.removed;
        console.log(`✅ ${file}: Removed ${result.removed} console statements`);
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`- Files processed: ${totalProcessed}`);
    console.log(`- Console statements removed: ${totalRemoved}`);
    console.log(`- Errors encountered: ${errors.length}`);
    
    if (errors.length > 0) {
      console.log('\n❌ Errors:');
      errors.forEach(({ file, error }) => {
        console.log(`   ${file}: ${error}`);
      });
    }
    
    console.log('\n✨ Console log removal completed!');
    
    // Write summary to file
    const summary = {
      timestamp: new Date().toISOString(),
      filesProcessed: totalProcessed,
      consoleStatementsRemoved: totalRemoved,
      errors: errors.length,
      errorDetails: errors
    };
    
    fs.writeFileSync('./console-removal-summary.json', JSON.stringify(summary, null, 2));
    console.log('📄 Summary saved to console-removal-summary.json');
    
  } catch (error) {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { removeConsoleStatements, findJSFiles };