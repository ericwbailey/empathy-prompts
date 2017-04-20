// ============================================================================
// Task
// Static
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-static', help.static.build, function() {
    return gulp.src(paths.static.source)
        .pipe(changed(paths.static.build))
        .pipe(gulp.dest(paths.static.build));
});


// Test
gulp.task('test-static', help.static.test, function() {
    return gulp.src(paths.static.source)
        .pipe(gulp.dest(paths.static.test));
});


// Deploy
gulp.task('deploy-static', help.static.deploy, function() {
    return gulp.src(paths.static.deploy.source)
        .pipe(gulp.dest(paths.static.deploy.dest));
});


// Parent
gulp.task('static', help.static.parent, function() {
    runSequence(
        'build-static',
        'test-static',
        'deploy-static'
    );
});
