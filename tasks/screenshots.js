// ============================================================================
// Task
// Screenshots
// ============================================================================
var gulp             = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help             = require('./help.js'),
    paths            = require('./paths.js'),
    localscreenshots = require('gulp-local-screenshots');     // https://www.npmjs.com/package/gulp-local-screenshots


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('screenshots', help.screenshots, function () {
    return gulp.src(paths.screenshots.source)
        .pipe(localscreenshots({
            width: ['320', '800', '1920', '2560'], // Should match the breakpoints used in `_breakpoints.scss`
            type: 'png',
            folder: paths.screenshots.dest
        }))
});
