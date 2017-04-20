// ============================================================================
// Task
// Icons
// ============================================================================
var gulp     = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help     = require('./help.js'),
    paths    = require('./paths.js'),
    rename   = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    svgstore = require('gulp-svgstore');              // https://www.npmjs.com/package/gulp-svgstore


// Tasks ----------------------------------------------------------------------
gulp.task('build-sprites', help.sprites.parent, function() {
    return gulp.src(paths.sprites.source)
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename({
            basename: 'icon-sprite',
            extname: '.hbs'
        }))
        .pipe(gulp.dest(paths.sprites.dest))
});
