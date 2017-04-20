// ============================================================================
// Task
// Clean
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    del         = require('del'),                        // https://www.npmjs.com/package/del
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('clean-build', help.clean.root, function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

gulp.task('clean-build-images', false, function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});

gulp.task('clean-build-scripts', false, function(cb) {
    del(paths.clean.build.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-build-static', false, function(cb) {
    del(paths.clean.build.static).then(function() {
        cb();
    });
});

gulp.task('clean-build-styles', false, function(cb) {
    del(paths.clean.build.styles).then(function() {
        cb();
    });
});


// Test
gulp.task('clean-test', help.clean.root, function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

gulp.task('clean-test-images', false, function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});

gulp.task('clean-test-scripts', false, function(cb) {
    del(paths.clean.test.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-test-static', false, function(cb) {
    del(paths.clean.test.static).then(function() {
        cb();
    });
});

gulp.task('clean-test-styles', false, function(cb) {
    del(paths.clean.test.styles).then(function() {
        cb();
    });
});


// Deploy
gulp.task('clean-deploy', help.clean.root, function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-images', false, function(cb) {
    del(paths.clean.deploy.images).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-scripts', false, function(cb) {
    del(paths.clean.deploy.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-static', false, function(cb) {
    del(paths.clean.deploy.static).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-styles', false, function(cb) {
    del(paths.clean.deploy.styles).then(function() {
        cb();
    });
});


// Document
gulp.task('clean-documentation', help.clean.root, function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

gulp.task('clean-documentation-styles', false, function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});


// Document
gulp.task('clean-screenshots', false, function(cb) {
    del(paths.clean.screenshots).then(function() {
        cb();
    });
});


// Parent
gulp.task('clean', help.clean.parent, function() {
    runSequence(
        'clean-build',
        'clean-test',
        'clean-deploy',
        'clean-documentation',
        'clean-screenshots'
    );
});
