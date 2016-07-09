const gulp = require('gulp')
const mocha = require('gulp-mocha')

gulp.task('test', () => {
  return gulp.src('test/*.js', { read: false })
    .pipe(mocha())
})

gulp.task('default', () => {
  gulp.start('test')
})
