// ============================================================================
// Task
// Images
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    imagemin    = require('gulp-imagemin'),              // https://www.npmjs.com/package/gulp-imagemin
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    size        = require('gulp-filesize');              // https://www.npmjs.com/package/gulp-filesize


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-images', help.images.build, function() {
    return gulp.src(paths.images.source)
        .pipe(changed(paths.images.build))
        .pipe(gulp.dest(paths.images.build))
});


// Test
gulp.task('test-images', help.images.test, function() {
    return gulp.src(paths.images.source)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
        }))
        .pipe(gulp.dest(paths.images.test));
});


// Deploy
gulp.task('deploy-images', help.images.deploy, function() {
    return gulp.src(paths.images.deploy.source)
        .pipe(gulp.dest(paths.images.deploy.dest));
});


// Parent
gulp.task('images', help.images.parent, function() {
    runSequence(
        'build-images',
        'test-images',
        'deploy-images'
    );
});
