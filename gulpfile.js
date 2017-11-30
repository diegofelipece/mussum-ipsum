var gulp 		      = require('gulp');
var $       	    = require('gulp-load-plugins')();
var	uglify 		    = require('gulp-uglify');
var	clean 		    = require('gulp-clean');
var	concat 		    = require('gulp-concat');
var babel         = require('gulp-babel');
var runSeq        = require('run-sequence');

var src  = 'src/mipsum.js',
    dist = 'dist';

// Files
gulp.task('clean', function (cb) {
  return gulp.src(dist, {read: false})
    .pipe(clean());
  cb(err);
});


gulp.task('copy', function() {
  return gulp.src(src)
    .pipe(gulp.dest(dist));
});

// basic
gulp.task('js_basic', function() {
  return gulp.src(src)
    .pipe(concat('mipsum.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dist));
});


// Javascript
gulp.task('js', function() {
  return gulp.src(src)
    .pipe(concat('mipsum.min.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(dist));
});

// Build task
gulp.task('build', function (cb) {
  runSeq('clean', ['js', 'js_basic'], cb)
});

gulp.task('default', ['build'], function() {
	gulp.watch(['src/*.js'], ['js', 'js_basic']);
});
