// ============================================================================
// Task
// Styles
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    autoprefix  = require('gulp-autoprefixer'),          // https://www.npmjs.com/package/gulp-autoprefixer
    browsersync = require('browser-sync'),               // http://www.browsersync.io/
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    cssnano     = require('gulp-cssnano'),               // https://www.npmjs.com/package/gulp-cssnano
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence
    sass        = require('gulp-sass'),                  // https://www.npmjs.com/package/gulp-sass
    sourcemaps  = require('gulp-sourcemaps'),            // https://www.npmjs.com/package/gulp-sourcemaps
    stylefmt    = require('gulp-stylefmt');              // https://www.npmjs.com/package/gulp-stylefmt


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-styles', help.styles.build, function () {
    return gulp.src(paths.styles.source)
        .pipe(changed(paths.styles.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
            errLogToConsole: true
        }))
        .pipe(autoprefix())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browsersync.stream({ match: '**/*.css' })); // TODO: Do I need this
});


// Test
gulp.task('test-styles', help.styles.test, function () {
    return gulp.src(paths.styles.source)
        .pipe(stylefmt())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix())
        .pipe(cssnano())
        .pipe(gulp.dest(paths.styles.test));
});


// Deploy
gulp.task('deploy-styles', help.styles.deploy, function() {
    return gulp.src(paths.styles.deploy.source)
        .pipe(gulp.dest(paths.styles.deploy.dest))
});


// Parent
gulp.task('styles', help.styles.parent, function() {
    runSequence(
        'build-styles',
        'test-styles',
        'deploy-styles'
    );
});
