module.exports = function() {
  $.gulp.task('sass-prod', function() {
    return $.gulp.src($.path.sass)
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({
      title: 'Style'
    }))
    .pipe($.gp.autoprefixer({
      browsers: $.config.autoprefixerConfig
    }))
    .pipe($.gulp.dest($.config.root + '/css'))
    .pipe($.gp.csso())
    .pipe($.gp.rename('main.min.css'))
    .pipe($.gulp.dest($.config.root + '/css'))
  });
};
