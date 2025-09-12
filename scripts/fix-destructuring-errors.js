#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Targeted Fix for Destructuring Syntax Errors
 * 
 * Specifically fixes malformed destructuring assignments like `const {;`
 */

class DestructuringErrorFixer {
  constructor() {
    this.results = {
      totalFiles: 0,
      fixedFiles: 0,
      errors: [],
      fixes: []
    };
    
    // Files with known destructuring errors
    this.errorFiles = [
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
      './src/reducer/LatsVduDrillReducer.jsx'
    ];
  }

  /**
   * Fix specific destructuring syntax errors
   */
  fixDestructuringInFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.results.errors.push(`File not found: ${filePath}`);
        return false;
      }

      const originalContent = fs.readFileSync(filePath, 'utf8');
      let fixedContent = originalContent;
      const fixes = [];

      // Fix malformed destructuring patterns
      
      // Pattern 1: Fix `const {;` -> `const { id }`  
      const malformedDestructuring = /const\s*\{\s*;\s*([^}]*)\s*\}\s*=\s*([^;]+);?/g;
      const destructuringMatches = [...originalContent.matchAll(malformedDestructuring)];
      
      if (destructuringMatches.length > 0) {
        fixedContent = fixedContent.replace(malformedDestructuring, (match, variables, assignment) => {
          // Extract variable names from the garbled text
          const cleanVariables = variables.trim().replace(/\s+/g, ' ');
          return `const { ${cleanVariables} } = ${assignment.trim()};`;
        });
        fixes.push('Fixed malformed destructuring assignments');
      }

      // Pattern 2: Fix standalone `const {;` patterns
      fixedContent = fixedContent.replace(/const\s*\{\s*;\s*/g, 'const { id ');
      
      // Pattern 3: Fix broken object destructuring with newlines
      fixedContent = fixedContent.replace(/const\s*\{\s*;\s*\n\s*([^}]+)\s*\n\s*\}/g, (match, content) => {
        const variables = content.trim().replace(/\s+/g, ', ');
        return `const { ${variables} }`;
      });

      // Pattern 4: Fix location.state destructuring specifically
      fixedContent = fixedContent.replace(/const\s*\{\s*;\s*id\s*\}\s*=\s*location\.state;?/g, 
        'const { id } = location.state || {};');

      // Pattern 5: General cleanup of malformed destructuring
      fixedContent = fixedContent.replace(/const\s*\{\s*;([^}]*)\}/g, (match, content) => {
        const cleanContent = content.trim().replace(/^\s*\n\s*/, '').replace(/\s*\n\s*$/, '');
        return `const { ${cleanContent} }`;
      });

      // Additional fixes for specific patterns found in error messages
      fixedContent = fixedContent.replace(/const\s*\{\s*;\s*\n\s*id\s*\n\s*\}\s*=\s*location\.state/g, 
        'const { id } = location.state || {}');

      // Fix import statements that got mangled
      fixedContent = fixedContent.replace(/import\s*\{\s*;\s*([^}]+)\s*\}\s*from/g, 'import { $1 } from');

      // Write fixed content if changes were made
      if (fixedContent !== originalContent) {
        // Create backup if it doesn't exist
        const backupPath = `${filePath}.backup2`;
        if (!fs.existsSync(`${filePath}.backup`)) {
          fs.writeFileSync(backupPath, originalContent, 'utf8');
        }
        
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
   * Fix all files with destructuring errors
   */
  async fixAllDestructuringErrors() {
    console.log('🔧 Starting destructuring syntax error fixes...\n');

    this.results.totalFiles = this.errorFiles.length;
    console.log(`📁 Processing ${this.errorFiles.length} files with destructuring errors\n`);

    for (const filePath of this.errorFiles) {
      console.log(`🔍 Fixing destructuring in: ${filePath}`);
      
      const wasFixed = this.fixDestructuringInFile(filePath);
      if (wasFixed) {
        this.results.fixedFiles++;
        console.log(`✅ Fixed: ${filePath}`);
      } else {
        console.log(`ℹ️  No destructuring changes needed: ${filePath}`);
      }
    }

    console.log('\n📊 Destructuring Fix Summary:');
    console.log(`- Total files processed: ${this.results.totalFiles}`);
    console.log(`- Files fixed: ${this.results.fixedFiles}`);
    console.log(`- Errors encountered: ${this.results.errors.length}`);

    if (this.results.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`   ${error}`));
    }

    if (this.results.fixes.length > 0) {
      console.log('\n✅ Fixed destructuring in:');
      this.results.fixes.forEach(fix => {
        console.log(`   ${fix.file}`);
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

    fs.writeFileSync('./destructuring-fix-summary.json', JSON.stringify(summary, null, 2));
    console.log('\n📄 Summary saved to destructuring-fix-summary.json');

    return this.results;
  }
}

// Main execution
if (require.main === module) {
  const fixer = new DestructuringErrorFixer();
  fixer.fixAllDestructuringErrors().then(() => {
    console.log('\n✨ Destructuring error fixing complete!');
    console.log('🔄 Please test build to verify fixes');
  }).catch(error => {
    console.error('💥 Failed to fix destructuring errors:', error);
    process.exit(1);
  });
}

module.exports = DestructuringErrorFixer;