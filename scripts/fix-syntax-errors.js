#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Comprehensive Syntax Error Fixer for UPMRC Application
 * 
 * This script identifies and fixes common syntax errors preventing build compilation
 */

class SyntaxErrorFixer {
  constructor() {
    this.results = {
      totalFiles: 0,
      fixedFiles: 0,
      errors: [],
      fixes: []
    };
  }

  /**
   * Get list of files with syntax errors from error.md
   */
  async getErrorFiles() {
    const errorFiles = [
      './src/component/TableStructureList.jsx',
      './src/edit/isha/Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx',
      './src/edit/isha/EditAfcPreventiveHalfYearly.jsx',
      './src/edit/isha/EditPMLOGBOOKMAAINLINE9.jsx',
      './src/edit/pinki/EditAxleCounter.jsx',
      './src/edit/satya/EditAfcPreventive.jsx',
      './src/edit/satya/EditCabinetRecord.jsx',
      './src/edit/satya/EditPMList.jsx',
      './src/edit/satya/EditPMMainline.jsx',
      './src/edit/store/StationEarningEdit.jsx',
      './src/forms/store/BudgetAllotmentForm.jsx',
      './src/forms/store/NightAfcGateDrill.jsx',
      './src/reducer/AfcPreventReducer.jsx',
      './src/reducer/AuthReducer.jsx',
      './src/reducer/CentCompPreReducer.jsx',
      './src/reducer/ColorLightSignalMainlineReducer.jsx',
      './src/reducer/ESPQuarterlyMaintananceSignalReducer.jsx',
      './src/reducer/FirstAidRegisterReducer.jsx',
      './src/reducer/HonorariumRegReducer.jsx',
      './src/reducer/IncidentAccidentRegReducer.jsx',
      './src/reducer/LatsVduDrillReducer.jsx',
      './src/reducer/ListHonorariumReducer.jsx',
      './src/reducer/LoanRegisterReducer.jsx',
      './src/reducer/OutstandRecRegReducer.jsx',
      './src/reducer/PoliceCtdRegReducer.jsx',
      './src/reducer/TER_Entry_Reducer.jsx',
      './src/reducer/Update_Check_List_PM_occ_bcc_Red.jsx',
      './src/reducer/akshra/AgentissueReducer.jsx',
      './src/reducer/akshra/TsrrReducer.jsx',
      './src/reducer/isha/IncidentAccidentRegReducer.jsx',
      './src/reducer/satya/PMLogBookTVMReducer.jsx',
      './src/reducer/satya/PMMainlineReducer.jsx',
      './src/tables/store/StockMovementTokensview.jsx',
      './src/tables/store/StockmovementcardsView.jsx'
    ];

    return errorFiles;
  }

  /**
   * Fix common syntax errors in a file
   */
  async fixFileErrors(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.results.errors.push(`File not found: ${filePath}`);
        return false;
      }

      const originalContent = fs.readFileSync(filePath, 'utf8');
      let fixedContent = originalContent;
      const fixes = [];

      // Fix 1: Handle single-line files (common issue from minification or incorrect merging)
      if (!fixedContent.includes('\n') && fixedContent.length > 200) {
        fixedContent = this.formatSingleLineFile(fixedContent);
        fixes.push('Formatted single-line file with proper line breaks');
      }

      // Fix 2: Fix export statements not at top level
      fixedContent = this.fixExportStatements(fixedContent);
      if (fixedContent !== originalContent) {
        fixes.push('Fixed export statements placement');
      }

      // Fix 3: Fix import statements
      fixedContent = this.fixImportStatements(fixedContent);
      if (fixedContent !== originalContent) {
        fixes.push('Fixed import statements');
      }

      // Fix 4: Fix JSX syntax issues
      fixedContent = this.fixJSXSyntax(fixedContent);
      
      // Fix 5: Fix missing semicolons and brackets
      fixedContent = this.fixMissingSyntax(fixedContent);

      // Fix 6: Fix React component syntax
      fixedContent = this.fixReactComponentSyntax(fixedContent);

      // Write fixed content if changes were made
      if (fixedContent !== originalContent) {
        // Create backup
        const backupPath = `${filePath}.backup`;
        fs.writeFileSync(backupPath, originalContent, 'utf8');
        
        // Write fixed content
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        
        this.results.fixes.push({
          file: filePath,
          fixes: fixes,
          hasBackup: true
        });
        
        return true;
      }

      return false;
      
    } catch (error) {
      this.results.errors.push(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  /**
   * Format single-line files by adding proper line breaks
   */
  formatSingleLineFile(content) {
    // Add line breaks after common patterns
    let formatted = content
      // After import statements
      .replace(/;(import\s)/g, ';\n$1')
      // After exports
      .replace(/;(export\s)/g, ';\n$1')
      // Before and after React component definitions
      .replace(/(const\s+\w+\s*=\s*\({?)/g, '\n\n$1')
      // After opening braces
      .replace(/{\s*([^}])/g, '{\n  $1')
      // Before closing braces
      .replace(/([^{])\s*}/g, '$1\n}')
      // After JSX return statements
      .replace(/return\s*\(/g, 'return (\n    ')
      // Add proper JSX formatting
      .replace(/>\s*</g, '>\n    <')
      // Fix PropTypes definitions
      .replace(/;(\w+\.propTypes)/g, ';\n\n$1')
      // After function endings
      .replace(/};(\w)/g, '};\n\n$1')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n');

    return formatted;
  }

  /**
   * Fix export statement placement issues
   */
  fixExportStatements(content) {
    // Find misplaced export statements within function bodies
    const exportRegex = /^(\s*)(export\s+default\s+\w+;?\s*)$/gm;
    
    // Extract all export statements
    const exports = [];
    content = content.replace(exportRegex, (match, indent, exportStatement) => {
      exports.push(exportStatement.trim());
      return ''; // Remove from current position
    });

    // Add exports at the end of the file
    if (exports.length > 0) {
      content = content.trim() + '\n\n' + exports.join('\n');
    }

    return content;
  }

  /**
   * Fix import statement issues
   */
  fixImportStatements(content) {
    // Ensure imports are at the beginning
    const importRegex = /^(import\s+.*?;)\s*$/gm;
    const imports = [];
    
    let cleanContent = content.replace(importRegex, (match, importStatement) => {
      imports.push(importStatement);
      return '';
    });

    // Clean up extra whitespace
    cleanContent = cleanContent.replace(/^\s*\n/gm, '');
    
    if (imports.length > 0) {
      return imports.join('\n') + '\n\n' + cleanContent;
    }

    return content;
  }

  /**
   * Fix JSX syntax issues
   */
  fixJSXSyntax(content) {
    // Fix common JSX issues
    return content
      // Fix self-closing tags
      .replace(/<(\w+)([^>]*?)\/>/g, '<$1$2 />')
      // Fix missing quotes in attributes
      .replace(/(\w+)=([^"'\s>]+)/g, '$1="$2"')
      // Fix React.memo usage
      .replace(/export\s+default\s+React\.memo\s*\(\s*(\w+)\s*\)\s*;?/g, 'export default React.memo($1);');
  }

  /**
   * Fix missing semicolons and brackets
   */
  fixMissingSyntax(content) {
    return content
      // Add missing semicolons after statements
      .replace(/^(\s*const\s+.*?[^;])\s*$/gm, '$1;')
      .replace(/^(\s*let\s+.*?[^;])\s*$/gm, '$1;')
      .replace(/^(\s*var\s+.*?[^;])\s*$/gm, '$1;')
      // Fix function declarations
      .replace(/^(\s*function\s+\w+\s*\([^)]*\)\s*{)/gm, '$1')
      // Fix arrow functions
      .replace(/=>\s*{([^}]*)}/g, '=> {\n  $1\n}');
  }

  /**
   * Fix React component syntax
   */
  fixReactComponentSyntax(content) {
    // Fix component definitions
    return content
      // Ensure proper React component export
      .replace(/(const\s+(\w+)\s*=\s*.*?};)\s*(export\s+default\s+React\.memo\s*\(\s*\w+\s*\);?)/g, 
               '$1\n\n$3')
      // Fix PropTypes definitions
      .replace(/^(\w+)\.propTypes\s*=\s*{/gm, '\n$1.propTypes = {')
      // Fix displayName
      .replace(/^(\w+)\.displayName\s*=\s*/gm, '\n$1.displayName = ');
  }

  /**
   * Fix all error files
   */
  async fixAllErrors() {
    console.log('🔧 Starting syntax error fixes...\n');

    const errorFiles = await this.getErrorFiles();
    this.results.totalFiles = errorFiles.length;

    console.log(`📁 Found ${errorFiles.length} files with syntax errors\n`);

    for (const filePath of errorFiles) {
      console.log(`🔍 Fixing: ${filePath}`);
      
      const wasFixed = await this.fixFileErrors(filePath);
      if (wasFixed) {
        this.results.fixedFiles++;
        console.log(`✅ Fixed: ${filePath}`);
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }
    }

    console.log('\n📊 Summary:');
    console.log(`- Total files processed: ${this.results.totalFiles}`);
    console.log(`- Files fixed: ${this.results.fixedFiles}`);
    console.log(`- Errors encountered: ${this.results.errors.length}`);

    if (this.results.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`   ${error}`));
    }

    if (this.results.fixes.length > 0) {
      console.log('\n✅ Fixed files:');
      this.results.fixes.forEach(fix => {
        console.log(`   ${fix.file}:`);
        fix.fixes.forEach(f => console.log(`      - ${f}`));
      });
    }

    // Write summary
    const summary = {
      timestamp: new Date().toISOString(),
      totalFiles: this.results.totalFiles,
      fixedFiles: this.results.fixedFiles,
      errors: this.results.errors,
      fixes: this.results.fixes
    };

    fs.writeFileSync('./syntax-error-fix-summary.json', JSON.stringify(summary, null, 2));
    console.log('\n📄 Summary saved to syntax-error-fix-summary.json');

    return this.results;
  }
}

// Main execution
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllErrors().then(() => {
    console.log('\n✨ Syntax error fixing complete!');
    console.log('🔄 Please run npm start to verify fixes');
  }).catch(error => {
    console.error('💥 Failed to fix syntax errors:', error);
    process.exit(1);
  });
}

module.exports = SyntaxErrorFixer;