var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
const removeSourcemaps = require('gulp-remove-sourcemaps');

var bundler = browserify({
  entries: $.path.app,
  cache: {}, packageCache: {}, fullPaths: true, debug: true
});

module.exports = function() {
  $.gulp.task('browserify', function() {
    return bundler
      .bundle()
      .pipe(sourceStream('main.js'))
      .pipe(buffer())
      .pipe(removeSourcemaps())
      .pipe($.gulp.dest($.config.root + '/js/'))
      .pipe($.gp.rename('main.min.js'))
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};

// gulp.watch($.path.app, $.gulp.series('browserify'));