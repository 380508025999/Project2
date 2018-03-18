/**
 * Created by Елена on 15.03.2018.
 */
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    prefix = require('gulp-autoprefixer'),
    livereloade = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
gulp.task('connect', function () {
  connect.server({
      root:'app' ,
      livereloade:true
  });

});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(minifyCSS( ))
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/css'))
        .pipe(notify('Done!'))
        .pipe(prefix('last 2 versions' , '> 1%' , 'ie 9'))
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    return gulp.watch('css/*.css' , ['default'])

});
//default
gulp.task('default' , ['connect' , 'watch']);