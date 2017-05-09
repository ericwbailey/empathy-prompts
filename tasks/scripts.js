// ============================================================================
// Task
// Scripts
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    concat      = require('gulp-concat'),                // https://www.npmjs.com/package/gulp-concat
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    size        = require('gulp-filesize'),              // https://www.npmjs.com/package/gulp-filesize
    uglify      = require('gulp-uglify');                // https://www.npmjs.com/package/gulp-uglify


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-scripts', help.scripts.build, function () {
    return gulp.src([
        paths.scripts.vendor.shoestring,
        paths.scripts.vendor.konami,
        paths.scripts.source
    ])
        .pipe(changed(paths.scripts.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.build));
});


// Test
gulp.task('test-scripts', help.scripts.build, function () {
    return gulp.src(paths.scripts.test.source)
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.test.dest));
});


// Deploy
gulp.task('deploy-scripts', help.scripts.deploy, function() {
    return gulp.src(paths.scripts.deploy.source)
        .pipe(gulp.dest(paths.scripts.deploy.dest))
});


// Parent
gulp.task('scripts', help.scripts.parent, function() {
    runSequence(
        'build-scripts',
        'test-scripts',
        'deploy-scripts'
    );
});
