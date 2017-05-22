const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

// task
gulp.task('compile', function () {

    browserify({
        entries: 'src/index.js',
        debug: true,
        standalone: 'urltm'
    })
    .bundle()
    .pipe(source('urltm.js'))
    .pipe(gulp.dest('./web/'));

});

gulp.task('default', ['compile']);
