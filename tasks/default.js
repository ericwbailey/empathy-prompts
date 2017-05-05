// ============================================================================
// Task
// Default
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    sync        = require('gulp-npm-script-sync');       // https://www.npmjs.com/package/gulp-npm-script-sync


// Tasks ----------------------------------------------------------------------
// Default
gulp.task('default', ['build'], function() {
    gulp.watch(paths.styles.watch, ['build-styles']);
    gulp.watch(paths.pages.watch, ['build-pages']);
    gulp.watch(paths.scripts.watch, ['build-scripts']);
    gulp.watch(paths.images.watch, ['build-images']);
    gulp.watch(paths.browsersync.watch.build, ['browsersync-reload']);
});


// Build
gulp.task('build', help.default.build, function() {
    runSequence(
        'clean-build',
        'build-errata',
        'build-pages',
        'build-styles',
        'build-scripts',
        'build-static',
        'responsify-images',
        'build-sprites',
        'build-images',
        'build-sitemap',
        'browsersync-build'
    );
});


// Test
gulp.task('test', help.default.test, function() {
    runSequence(
        'clean-test',
        'test-errata',
        'test-pages',
        'test-styles',
        'test-scripts',
        'test-static',
        'test-images',
        'test-sitemap',
        'browsersync-test'
    );
});


// Deploy
gulp.task('deploy', help.default.deploy, function() {
    runSequence(
        'clean-deploy',
        'deploy-errata',
        'deploy-pages',
        'deploy-styles',
        'deploy-scripts',
        'deploy-static',
        'deploy-images',
        'deploy-sitemap',
        'git',
        'document'
    );
});


// Turns Gulp tasks into NPM scripts in `package.json`
sync(gulp);
