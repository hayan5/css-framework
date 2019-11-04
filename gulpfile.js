const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Gulp Tasks
//
// Run gulp sass: compile all sass into main.css
// Run gulp live: live production server that reloads on updates to scss files

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
});


// Watch all scss files and compile/reload on change
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'reload'));
});


// Initiliaze server 
gulp.task('serve', function() {
  browserSync.init({
    server: 'src',
    port: 4000
  });
});


// Reload server 
gulp.task('reload', function(done) {
  browserSync.reload();
  done();
})


// Run live server that reloads on updates to sass
gulp.task('live', gulp.parallel('serve', 'watch'));
