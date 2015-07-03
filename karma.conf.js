module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            /* Framework */
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',

            /* Application code to test */
            'src/module/main.js',
            'src/controller/plannerCtrl.js',

            /* Test specs */
            'test/ctrltest.js',
        ],
        preprocessors: {
            'src/module/main.js': ['coverage'],
            'src/controller/plannerCtrl.js': ['coverage'],
            'test/ctrltest.js': ['coverage'],
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        singleRun: false,
        autoWatch: false,   
        usePolling: true,
        browsers: ['Chrome']
    });
    //console.log(config);
};