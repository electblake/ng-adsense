(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy: false});
  var path = require('path');

  gulp.task('default', function() {
    return gulp.src(__dirname + '/src/**/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter(require('jshint-stylish')))
      .pipe($.sourcemaps.init())
      .pipe($.concat('ng-adsense.min.js'))
      .pipe($.uglify())
      // .pipe($.rev())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(__dirname + '/dist'));
  });

})();