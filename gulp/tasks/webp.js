module.exports = function() {
  $.gulp.task('webp', function() {
    return $.gulp.src('./src/images/**/*.{png,jpg}')
      .pipe($.gp.webp({quality: 80}))
      .pipe($.gulp.dest($.config.root + '/images'));
  });
};