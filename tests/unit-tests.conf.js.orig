// Karma configuration
// Generated on Fri Jan 06 2017 12:48:18 GMT+0530 (IST)
var path = require('path'),
    webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        plugins: [
            require("karma-webpack"),
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-chrome-launcher'
        ],


        // list of files / patterns to load in the browser
        files: [
            // all files ending in "_test"
            '../www/lib/angular/angular.js',
            '../www/lib/angular-mocks/angular-mocks.js',
            { pattern: '../tests/unit-tests/**/*.js', watched: false },
            // each file acts as entry point for the webpack configuration
        ],
        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './www/dist/www/js/*.js': ['webpack'],
            '../tests/unit-tests/**/*.js*': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },



        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '√',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}