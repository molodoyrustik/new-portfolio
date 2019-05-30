module.exports = function() {
  $.gulp.task('js-prod', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.concat('main.js'))
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.gp.rename('main.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
