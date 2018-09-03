var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

const cssmin = require('gulp-clean-css');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const imagemin = require('gulp-imagemin');

//Task para o sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({
    	outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Task para o watch
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});


gulp.task('clean', function () {
  return gulp.src('dist/')
  .pipe(clean());
});

gulp.task('minify-css', function () {
  return gulp.src(['css/style.css', 'css/master.css'])
  .pipe(cssmin())
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./dist/css/'));
});
gulp.task('minify-img', function () {
  return gulp.src(['css/style.css', 'css/master.css'])
  .pipe(cssmin())
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function () {
  return runSequence('clean', ['minify-css', 'minify-img']);
});

//Task para default do gulp
gulp.task('default', ['sass', 'watch']);