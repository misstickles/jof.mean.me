var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', ['scripts', 'dependencies']);

gulp.task('scripts', function() {
	var DEST = 'public/gen/';
	return gulp.src('app_client/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(DEST))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(DEST));
});

gulp.task('angular', function() {
	return gulp.src([
			'node_modules/angular/angular.min.js',
			'node_modules/angular/angular.min.js.map'
		])
		.pipe(gulp.dest('public/vendor/angular'));
});

// bootstrap and jquery require the existing folder structure
gulp.task('bootstrap', function() {
	return gulp.src([
			'node_modules/bootstrap/dist/**/*.*',
			'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
			'!**/npm.js',
			'!**/bootstrap-theme.*'
		])
		.pipe(gulp.dest('public/vendor/bootstrap'));
});

gulp.task('jquery', function() {
	return gulp.src([
			'node_modules/jquery/dist/jquery.js',
			'node_modules/jquery/dist/jquery.min.js'
		])
		.pipe(gulp.dest('public/vendor/jquery'))
});

gulp.task('fontawesome', function() {
	return gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json',
            '!node_modules/font-awesome/less{,/**}',
            '!node_modules/font-awesome/scss{,/**}'
		])
		.pipe(gulp.dest('public/vendor/fontawesome'));
});

gulp.task('scrollreveal', function() {
	return gulp.src([
			'node_modules/scrollreveal/dist/scrollreveal.min.js'
		])
		.pipe(gulp.dest('public/vendor/scrollreveal'));
});

gulp.task('magnificpopup', function() {
	return gulp.src([
			'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
			'node_modules/magnific-popup/dist/magnific-popup.css'
		])
		.pipe(gulp.dest('public/vendor/magnific-popup'));
});

gulp.task('dependencies', [
	'angular', 
	'bootstrap', 
	'jquery', 
	'fontawesome', 
	'scrollreveal', 
	'magnificpopup'
]);
