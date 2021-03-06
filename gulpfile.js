// *** dependencies *** //

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');


// *** tasks *** ///

gulp.task('connect', function () {
  connect.server({
    root: './src/',
    port: 8888,
    livereload: true
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: './dist/',
    port: 9999,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./src/css/*.css')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src('./src/app/*.app')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('./src/app/*.app', ['jshint']);
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/css/'], ['css']);

});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true, spare:true};
  gulp.src('./src/css/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-app', function() {
  gulp.src('./src/app/*.app')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/app/'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'));
});

// *** default *** //
gulp.task('default', ['watch', 'connect']);

// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['jshint'],
    ['minify-css'],
    ['minify-app'],
    ['copy-html-files'],
    ['connectDist']
  );
});
