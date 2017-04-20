// ============================================================================
// Task
// Git
// ============================================================================
var gulp          = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help          = require('./help.js'),
    paths         = require('./paths.js'),
    git           = require('gulp-git'),                   // https://www.npmjs.com/package/gulp-git
    runSequence   = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence

    currentTime = new Date();


// Tasks ----------------------------------------------------------------------
// Add
gulp.task('git-add', help.git.add, function() {
    return gulp.src('./docs/*')
        .pipe(git.add());
});


// Commit
gulp.task('git-commit', help.git.commit, function() {
    return gulp.src('./docs/*')
        .pipe(git.commit('Deployed site on ' + currentTime));
});


// Push
gulp.task('git-push', help.git.push, function() {
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});


// Parent
gulp.task('git', help.git.parent, function() {
    runSequence(
        'git-add',
        'git-commit',
        'git-push'
    );
});
