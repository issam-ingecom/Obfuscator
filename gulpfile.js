const gulp = require('gulp');
const obfuscator = require('gulp-javascript-obfuscator');

// Define a task to obfuscate JavaScript files
gulp.task('obfuscate', function () {
  return gulp.src('./Proyect/Input/**/*.js')
    .pipe(obfuscator())
    .pipe(gulp.dest('./Proyect/Output/'));
});

// Define a default task
gulp.task('default', gulp.series('obfuscate'));
