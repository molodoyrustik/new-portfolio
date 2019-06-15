module.exports = function() {
  $.gulp.task('imagemin', function() {
    return $.gulp.src('./src/images/**/*.{png,jpg,svg}')
      .pipe($.gp.imagemin([
        // $.gp.imagemin.optipng({optimizationLevel: 5}),
        $.gp.imagemin.jpegtran({progressive: true}),
        $.gp.imagemin.svgo()
      ]))
      .pipe($.gulp.dest($.config.root + '/images'));
  });
};
