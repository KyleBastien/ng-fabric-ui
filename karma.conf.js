// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    customContextFile: 'config/karma-context.html',
    files: [
      { pattern: 'src/test.ts', watched: false }
    ],
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap'],
    },
    webpack: require('./webpack.config.test'),
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev',
      codeCoverage: 'true'
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
