// ============================================================================
// Task
// Errata
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-errata', help.errata.build, function() {
    return gulp.src(paths.errata.source)
        .pipe(gulp.dest(paths.errata.build));
});


// Test
gulp.task('test-errata', help.errata.test, function() {
    return gulp.src(paths.errata.source)
        .pipe(gulp.dest(paths.errata.test));
});


// Deploy
gulp.task('deploy-errata', help.errata.deploy, function() {
    return gulp.src(paths.errata.source)
        .pipe(gulp.dest(paths.errata.deploy));
});


// Parent
gulp.task('errata', help.errata.parent, function() {
    runSequence(
        'build-errata',
        'test-errata',
        'deploy-errata'
    );
});
