
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('mix-js', function(){
    gulp.src('./js/main.js')
        .pipe(babel({presets: 'es2015'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
    gulp.watch('./js/**/*.js', ['mix-js']);
});


gulp.task('default', ['mix-js']);