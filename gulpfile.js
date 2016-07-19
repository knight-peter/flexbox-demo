var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('src/css/*')
    .pipe(sass())
    .pipe(gulp.dest('dest/css'));
});