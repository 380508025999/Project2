'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/style.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
        .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/style'));
        // .pipe($.browserSync.stream());
    })
};
