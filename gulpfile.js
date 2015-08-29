var gulp = require('gulp');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css')
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('src/cleanslate.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefix('last 3 version'))
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.write('../dist'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('demo/css'))
});

gulp.task('minify', function() {
    return gulp.src('src/cleanslate.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefix('last 3 version'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
        .pipe(rename('cleanslate.min.css'))
        .pipe(sourcemaps.write('../dist'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['less', 'minify']);