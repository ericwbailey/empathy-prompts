// ============================================================================
// Task
// Report Error
// ============================================================================
var gulp   = require('gulp'),        // http://gulpjs.com/
    paths  = require('./paths.js'),
    gutil  = require('gulp-util'),   // https://www.npmjs.com/package/gulp-util
    notify = require('gulp-notify'); // https://www.npmjs.com/package/gulp-notify


// Tasks ----------------------------------------------------------------------
// - Better error reporting in the console
module.exports = function(error) {
	var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

	notify({
		title: 'Task failed [' + error.plugin + ']',
		message: lineNumber + 'See terminal.',
		sound: false
	}).write(error);

	gutil.beep();

	var report = '';
	var chalk = gutil.colors.white.bgRed;

	report += chalk('TASK:') + ' [' + error.plugin + ']\n';
	report += chalk('PROB:') + ' ' + error.message + '\n';

	if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }

	if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }

	console.error(report);

	this.emit('end');
};
