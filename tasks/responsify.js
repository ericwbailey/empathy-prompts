// ============================================================================
// Task
// Responsify Images
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    gm          = require('gulp-gm'),                    // https://www.npmjs.com/package/gulp-gm
    rename      = require("gulp-rename");                // https://www.npmjs.com/package/gulp-rename
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
function gmFileConfig (gmfile, options) {
    return gmfile.setFormat(options.setFormat || 'jpg'),
           gmfile.resample.apply(gmfile, options.resample || [72, 72]),
           gmfile.thumbnail(options.thumbnail || 2560),
           gmfile.quality(options.quality || 82),
           gmfile.filter(options.filter || 'triangle'),
           gmfile.unsharp(options.unsharp || '0.25x0.25+8+0.065'),
           gmfile.interlace(options.interlace || 'none'),
           gmfile.colorspace(options.colorspace || 'sRGB');
}


// Tasks ----------------------------------------------------------------------
// JPGs
gulp.task('responsify-jpgs', help.responsify.jpgs, function() {
    return gulp.src(paths.responsify.source.jpgs) // Ingests images with an extension of `.jpg` and a suffix of `-fullsize`
        .pipe(gm(function (gmfile) {
                return gmFileConfig(gmfile, {
                    thumbnail: 800
                });
            },
            {
                imageMagick: true
            }))
            .pipe(rename(function (path) {
                path.basename = `${path.basename.replace(/-fullsize$/, '')}-palm`;
            }))
        .pipe(gulp.dest(paths.images.build)) // Generates palm-sized images
        .pipe(gm(function (gmfile) {
                return gmFileConfig(gmfile, {
                    thumbnail: 320
                });
            },
            {
                imageMagick: true
            }))
            .pipe(rename(function (path) {
                path.basename = `${path.basename.replace(/-palm$/, '')}-wrist`;
            }))
        .pipe(gulp.dest(paths.images.build)); // Generates wrist-sized images
});


// PNGs
gulp.task('responsify-pngs', help.responsify.pngs, function() {
    return gulp.src(paths.responsify.source.pngs) // Ingests images with an extension of `.png` and a suffix of `-fullsize`
        .pipe(gm(function (gmfile) {
                return gmFileConfig(gmfile, {
                    setFormat: 'png',
                    quality: 100, // Compression handled by test optimization task
                    thumbnail: 800
                });
            },
            {
                imageMagick: true
            }))
            .pipe(rename(function (path) {
                path.basename = `${path.basename.replace(/-fullsize$/, '')}-palm`;
            }))
        .pipe(gulp.dest(paths.images.build)) // Generates palm-sized images
        .pipe(gm(function (gmfile) {
                return gmFileConfig(gmfile, {
                    setFormat: 'png',
                    quality: 100, // Compression handled by test optimization task
                    thumbnail: 320
                });
            },
            {
                imageMagick: true
            }))
            .pipe(rename(function (path) {
                path.basename = `${path.basename.replace(/-palm$/, '')}-wrist`;
            }))
        .pipe(gulp.dest(paths.images.build)); // Generates wrist-sized images
});


// Parent
gulp.task('responsify-images', help.responsify.parent, function() {
    runSequence(
        'responsify-jpgs',
        'responsify-pngs'
    );
});
