// ============================================================================
// Task
// Lint
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    htmlhint    = require("gulp-htmlhint"),              // https://www.npmjs.com/package/gulp-htmlhint
    jshint      = require('gulp-jshint'),                // https://www.npmjs.com/package/gulp-jshint
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    stylelint   = require('gulp-stylelint'),             // https://www.npmjs.com/package/gulp-stylelint
    stylish     = require('jshint-stylish');             // https://www.npmjs.com/package/jshint-stylish


// Tasks ----------------------------------------------------------------------
// Scripts
gulp.task('lint-scripts', help.lint.scripts, function() {
    return gulp.src(paths.lint.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});


// Styles
gulp.task('lint-styles', help.lint.styles, function() {
    return gulp.src(paths.lint.styles)
        .pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});


// Pages
gulp.task('lint-pages', help.lint.pages, function() {
    return gulp.src(paths.lint.pages)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter());
});


// Parent
gulp.task('lint', help.lint.parent, function() {
    runSequence(
        'lint-scripts',
        'lint-styles'
    );
});
