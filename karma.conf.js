module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            /* Framework */
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',

            /* Application code to test */
            'src/module/main.js',
            'src/controller/plannerCtrl.js',

            /* Test specs */
            'unittest/*.js',
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir : 'coverage/'
        },
        // web server port
        port: 9876,
        singleRun: true
    })
};