// ============================================================================
// Task
// Sitemap
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    sitemap     = require('gulp-sitemap');               // https://www.npmjs.com/package/gulp-sitemap


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-sitemap', help.sitemap.build, function() {
    return gulp.src(paths.sitemap.build.source, {
        read: false
    })
    .pipe(sitemap({
        siteUrl: 'https://$$projectURL.com'
    }))
    .pipe(gulp.dest(paths.sitemap.build.dest));
});


// Test
gulp.task('test-sitemap', help.sitemap.test, function() {
    return gulp.src(paths.sitemap.test.source)
        .pipe(gulp.dest(paths.sitemap.test.dest));
});


// Deploy
gulp.task('deploy-sitemap', help.sitemap.deploy, function() {
    return gulp.src(paths.sitemap.deploy.source)
        .pipe(gulp.dest(paths.sitemap.deploy.dest));
});


// Parent
gulp.task('sitemap', help.sitemap.parent, function() {
    runSequence(
        'build-sitemap',
        'test-sitemap',
        'deploy-sitemap'
    );
});
