module.exports = function() {
  $.gulp.task('copy.icons', function() {
    return $.gulp.src('./src/images/**/*.svg', { since: $.gulp.lastRun('copy.image') })
      .pipe($.gulp.dest($.config.root + '/images'));
  });
};
