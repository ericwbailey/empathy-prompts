// ============================================================================
// Task
// BrowserSync
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    browsersync = require('browser-sync');               // https://www.browsersync.io/


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('browsersync-build', help.browsersync.build, function() {
    browsersync({
        server: {
            baseDir: paths.browsersync.basedir.build,
            index: paths.browsersync.index
        },
        minify: false,
        notify: false,
        logPrefix: "BUILD"
    });
});


// Test
gulp.task('browsersync-test', help.browsersync.test, function() {
    browsersync({
        server: {
            baseDir: paths.browsersync.basedir.test,
            index: paths.browsersync.index
        },
        minify: false,
        notify: false,
        browser: ["firefox", "google chrome", "safari", "opera"],
        logPrefix: "TEST"
    });
});


// Reload
gulp.task('browsersync-reload', help.browsersync.reload, function() {
    browsersync.reload();
});
