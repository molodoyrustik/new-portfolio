global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    tasks: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    sass: require('./gulp/paths/sass.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
  'clean',
  'sprite.svg',
  $.gulp.parallel(
    'sass-prod',
    'css.foundation',
    'pug.prod',
    'browserify',
    'imagemin',
    'copy.image',
    'webp',
    'fonts'
  ),
));


$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite.svg',
  $.gulp.parallel(
    'sass',
    'css.foundation',
    'pug',
    'browserify.dev',
    'copy.image',
    // 'webp',
    'fonts'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));