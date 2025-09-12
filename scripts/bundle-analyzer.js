#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  buildDir: './build',
  outputDir: './bundle-reports',
  thresholds: {
    totalSize: 2 * 1024 * 1024, // 2MB
    chunkSize: 500 * 1024, // 500KB
    assetSize: 100 * 1024, // 100KB
  }
};

class BundleAnalyzer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      bundleSizes: {},
      analysis: {},
      recommendations: [],
      thresholdViolations: []
    };
    
    // Ensure output directory exists
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
  }

  // Build the application with source maps
  buildWithSourceMaps() {
    console.log('🔨 Building application with source maps...');
    try {
      process.env.GENERATE_SOURCEMAP = 'true';
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed successfully\n');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }

  // Analyze bundle files
  analyzeBundleFiles() {
    console.log('📊 Analyzing bundle files...');
    
    const buildStaticJs = path.join(CONFIG.buildDir, 'static', 'js');
    
    if (!fs.existsSync(buildStaticJs)) {
      console.error('❌ Build directory not found. Please run npm run build first.');
      return;
    }

    const jsFiles = fs.readdirSync(buildStaticJs)
      .filter(file => file.endsWith('.js'))
      .map(file => {
        const filePath = path.join(buildStaticJs, file);
        const stats = fs.statSync(filePath);
        return {
          name: file,
          path: filePath,
          size: stats.size,
          type: this.getFileType(file)
        };
      })
      .sort((a, b) => b.size - a.size);

    this.results.bundleSizes = {
      totalFiles: jsFiles.length,
      totalSize: jsFiles.reduce((sum, file) => sum + file.size, 0),
      files: jsFiles
    };

    // Analyze individual files
    jsFiles.forEach(file => {
      if (file.size > CONFIG.thresholds.chunkSize) {
        this.results.thresholdViolations.push({
          type: 'Large Chunk',
          file: file.name,
          size: file.size,
          threshold: CONFIG.thresholds.chunkSize,
          recommendation: `Consider code splitting for ${file.name}`
        });
      }
    });

    console.log(`📁 Found ${jsFiles.length} JavaScript files`);
    console.log(`📏 Total bundle size: ${this.formatBytes(this.results.bundleSizes.totalSize)}`);
    
    return jsFiles;
  }

  // Determine file type based on naming convention
  getFileType(filename) {
    if (filename.includes('main.') || filename.includes('app.')) return 'main';
    if (filename.includes('vendor') || filename.includes('node_modules')) return 'vendor';
    if (filename.includes('runtime')) return 'runtime';
    if (filename.match(/^\d+\./)) return 'chunk';
    return 'unknown';
  }

  // Generate bundle analysis with webpack-bundle-analyzer
  generateWebpackAnalysis() {
    console.log('🔍 Generating webpack bundle analysis...');
    
    try {
      const reportPath = path.join(CONFIG.outputDir, 'webpack-report.json');
      execSync(`npx webpack-bundle-analyzer ${CONFIG.buildDir}/static/js/*.js --mode json --report ${reportPath}`, 
        { stdio: 'pipe' });
      
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.results.analysis.webpack = {
          parsedSize: report.parsedSize,
          gzippedSize: report.gzippedSize,
          modules: report.children?.[0]?.modules?.length || 0
        };
        console.log('✅ Webpack analysis complete');
      }
    } catch (error) {
      console.warn('⚠️  Webpack analysis failed:', error.message.split('\n')[0]);
    }
  }

  // Generate source map analysis
  generateSourceMapAnalysis() {
    console.log('🗺️  Generating source map analysis...');
    
    try {
      const reportPath = path.join(CONFIG.outputDir, 'sourcemap-report.json');
      execSync(`npx source-map-explorer ${CONFIG.buildDir}/static/js/*.js --json > ${reportPath}`, 
        { stdio: 'pipe' });
      
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.results.analysis.sourceMap = {
          totalSize: Object.values(report.files || {})[0]?.totalBytes || 0,
          fileCount: Object.keys(report.files || {}).length
        };
        console.log('✅ Source map analysis complete');
      }
    } catch (error) {
      console.warn('⚠️  Source map analysis failed:', error.message.split('\n')[0]);
    }
  }

  // Analyze App.js specifically for route imports
  analyzeAppJs() {
    console.log('🎯 Analyzing App.js structure...');
    
    const appJsPath = './src/App.js';
    if (!fs.existsSync(appJsPath)) {
      console.warn('⚠️  App.js not found');
      return;
    }

    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    const lines = appJsContent.split('\n');
    
    const analysis = {
      totalLines: lines.length,
      lazyImports: 0,
      staticImports: 0,
      routes: 0
    };

    lines.forEach(line => {
      if (line.includes('lazy(')) analysis.lazyImports++;
      if (line.includes('import ') && !line.includes('lazy')) analysis.staticImports++;
      if (line.includes('<Route')) analysis.routes++;
    });

    this.results.analysis.appJs = analysis;
    
    // Add recommendations based on App.js analysis
    if (analysis.totalLines > 500) {
      this.results.recommendations.push({
        type: 'App.js Refactoring',
        priority: 'High',
        description: `App.js has ${analysis.totalLines} lines. Consider splitting into route modules.`,
        impact: 'Bundle size reduction, better code splitting'
      });
    }

    if (analysis.lazyImports > 100) {
      this.results.recommendations.push({
        type: 'Route Optimization',
        priority: 'Medium',
        description: `${analysis.lazyImports} lazy imports detected. Consider route-based code splitting.`,
        impact: 'Improved initial load time'
      });
    }
  }

  // Check performance thresholds
  checkThresholds() {
    console.log('⚖️  Checking performance thresholds...');
    
    const totalSize = this.results.bundleSizes.totalSize;
    
    if (totalSize > CONFIG.thresholds.totalSize) {
      this.results.thresholdViolations.push({
        type: 'Total Bundle Size',
        size: totalSize,
        threshold: CONFIG.thresholds.totalSize,
        overBy: totalSize - CONFIG.thresholds.totalSize,
        recommendation: 'Implement aggressive code splitting and tree shaking'
      });
    }

    // Check for duplicate dependencies
    this.checkForDuplicates();
  }

  // Check for potential duplicate dependencies
  checkForDuplicates() {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const potentialDuplicates = [];
    
    // Check for common duplicates
    const duplicatePatterns = [
      ['react', '@types/react'],
      ['lodash', 'lodash-es'],
      ['moment', 'dayjs', 'date-fns'],
      ['axios', 'fetch'],
      ['@mui/material', 'react-bootstrap'] // UI library duplication
    ];

    duplicatePatterns.forEach(pattern => {
      const found = pattern.filter(pkg => deps[pkg]);
      if (found.length > 1) {
        potentialDuplicates.push({
          packages: found,
          recommendation: `Consider using only one: ${found.join(' OR ')}`
        });
      }
    });

    if (potentialDuplicates.length > 0) {
      this.results.recommendations.push({
        type: 'Duplicate Dependencies',
        priority: 'Medium',
        description: 'Potential duplicate dependencies detected',
        details: potentialDuplicates
      });
    }
  }

  // Generate recommendations
  generateRecommendations() {
    console.log('💡 Generating optimization recommendations...');
    
    const totalSize = this.results.bundleSizes.totalSize;
    
    // Size-based recommendations
    if (totalSize > 5 * 1024 * 1024) { // 5MB
      this.results.recommendations.push({
        type: 'Critical Bundle Size',
        priority: 'Critical',
        description: `Bundle size is ${this.formatBytes(totalSize)}. Immediate action required.`,
        actions: [
          'Implement route-based code splitting',
          'Remove unused dependencies',
          'Enable tree shaking',
          'Compress images and assets'
        ]
      });
    }

    // React-specific recommendations
    this.results.recommendations.push({
      type: 'React Optimization',
      priority: 'Medium',
      description: 'General React optimization recommendations',
      actions: [
        'Implement React.memo for expensive components',
        'Use useMemo and useCallback for expensive computations',
        'Consider React.lazy for component-level code splitting',
        'Optimize re-rendering patterns'
      ]
    });
  }

  // Format bytes to human readable format
  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate comprehensive report
  generateReport() {
    console.log('📄 Generating comprehensive report...');
    
    const reportPath = path.join(CONFIG.outputDir, 'bundle-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    
    // Generate markdown report
    const mdReportPath = path.join(CONFIG.outputDir, 'bundle-analysis-report.md');
    const mdContent = this.generateMarkdownReport();
    fs.writeFileSync(mdReportPath, mdContent);
    
    console.log(`✅ Reports generated:`);
    console.log(`   JSON: ${reportPath}`);
    console.log(`   Markdown: ${mdReportPath}`);
  }

  // Generate markdown report
  generateMarkdownReport() {
    const { bundleSizes, analysis, recommendations, thresholdViolations } = this.results;
    
    return `# Bundle Analysis Report

**Generated**: ${this.results.timestamp}

## Bundle Size Overview

- **Total Files**: ${bundleSizes.totalFiles}
- **Total Size**: ${this.formatBytes(bundleSizes.totalSize)}
- **Status**: ${bundleSizes.totalSize > CONFIG.thresholds.totalSize ? '🚨 Exceeds Threshold' : '✅ Within Threshold'}

### File Breakdown
${bundleSizes.files.slice(0, 10).map(file => 
  `- **${file.name}**: ${this.formatBytes(file.size)} (${file.type})`
).join('\n')}

## Analysis Results

### App.js Structure
${analysis.appJs ? `
- **Total Lines**: ${analysis.appJs.totalLines}
- **Lazy Imports**: ${analysis.appJs.lazyImports}
- **Static Imports**: ${analysis.appJs.staticImports}
- **Routes**: ${analysis.appJs.routes}
` : 'App.js analysis not available'}

## Threshold Violations

${thresholdViolations.length > 0 ? 
  thresholdViolations.map(violation => `
### ${violation.type}
- **File**: ${violation.file || 'N/A'}
- **Size**: ${this.formatBytes(violation.size)}
- **Threshold**: ${this.formatBytes(violation.threshold)}
- **Recommendation**: ${violation.recommendation}
`).join('\n') : 'No threshold violations found ✅'}

## Recommendations

${recommendations.map(rec => `
### ${rec.type} (${rec.priority} Priority)
${rec.description}

${rec.actions ? rec.actions.map(action => `- ${action}`).join('\n') : ''}
`).join('\n')}

## Next Steps

1. Address threshold violations immediately
2. Implement high-priority recommendations
3. Monitor bundle size after each change
4. Set up automated bundle size monitoring

---

*Report generated by Bundle Analyzer v1.0*`;
  }

  // Print summary to console
  printSummary() {
    console.log('\n📊 Bundle Analysis Summary');
    console.log('================================');
    console.log(`Total Bundle Size: ${this.formatBytes(this.results.bundleSizes.totalSize)}`);
    console.log(`Number of Files: ${this.results.bundleSizes.totalFiles}`);
    console.log(`Threshold Violations: ${this.results.thresholdViolations.length}`);
    console.log(`Recommendations: ${this.results.recommendations.length}`);
    
    if (this.results.bundleSizes.totalSize > CONFIG.thresholds.totalSize) {
      const excess = this.results.bundleSizes.totalSize - CONFIG.thresholds.totalSize;
      console.log(`\n🚨 Bundle size exceeds threshold by ${this.formatBytes(excess)}`);
    } else {
      console.log('\n✅ Bundle size within acceptable limits');
    }
    
    console.log(`\n📁 Reports saved to: ${CONFIG.outputDir}/`);
  }

  // Main execution method
  async run() {
    console.log('🚀 Starting Bundle Analysis...\n');
    
    try {
      // Step 1: Build with source maps
      this.buildWithSourceMaps();
      
      // Step 2: Analyze bundle files
      this.analyzeBundleFiles();
      
      // Step 3: Generate webpack analysis
      this.generateWebpackAnalysis();
      
      // Step 4: Generate source map analysis
      this.generateSourceMapAnalysis();
      
      // Step 5: Analyze App.js structure
      this.analyzeAppJs();
      
      // Step 6: Check performance thresholds
      this.checkThresholds();
      
      // Step 7: Generate recommendations
      this.generateRecommendations();
      
      // Step 8: Generate reports
      this.generateReport();
      
      // Step 9: Print summary
      this.printSummary();
      
      console.log('\n✨ Bundle analysis complete!');
      
    } catch (error) {
      console.error('💥 Bundle analysis failed:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new BundleAnalyzer();
  analyzer.run();
}

module.exports = BundleAnalyzer;