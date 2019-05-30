const fs = require('fs')
module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./src/templates/pages/*.pug')
      .pipe($.gp.pug({
        locals : JSON.parse(fs.readFileSync('./content.json', 'utf8')),
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
