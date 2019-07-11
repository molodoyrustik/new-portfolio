var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var bundler = browserify({
  entries: $.path.app,
  cache: {}, packageCache: {}, fullPaths: true, debug: true
});

module.exports = function() {
  $.gulp.task('browserify.dev', function() {
    return bundler
      .bundle()
      .pipe(sourceStream('main.js'))
      .pipe(buffer())
      .pipe($.gp.babel({
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }))
      .pipe($.gulp.dest($.config.root + '/js/'))
  })
};