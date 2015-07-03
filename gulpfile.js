'use strict';

var gulp = require('gulp');

gulp.task('tests', function(cb) {
    var karma = require('karma').server;
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, cb);
});

gulp.task('web', function(cb) {
    var webSrv;
    /**commenting this so that useBuild property should read from websettings.js*/
    webSrv = require("./myServer.js");  
});