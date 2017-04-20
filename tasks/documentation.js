// ============================================================================
// Task
// Documentation
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    sassdoc     = require('sassdoc'),                    // http://sassdoc.com/

    optionsSassdoc = {
        dest: paths.documentation.sassdoc.dest,
        theme: "flippant",
        autofill: ["requires", "content"],
        verbose: true,
        display: {
            alias: true
        },
    };


// Tasks ----------------------------------------------------------------------
// Styles
gulp.task('document-styles', help.document.styles, function () {
    return gulp.src(paths.documentation.sassdoc.source)
        .pipe(changed(paths.documentation.sassdoc.dest))
        .pipe(sassdoc(optionsSassdoc));
});


// Parent
gulp.task('document', help.document.parent, function() {
    runSequence(
        'document-styles'
    );
});
