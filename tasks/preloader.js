// preloader
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const vsource = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const path = require('path');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');

module.exports = params => {
  const { gulp, isProd, source, target, dirs, entries, plumber, notify, gulpif, browserSync, sourcemaps } = params;
  const tasks = [];
  const inputCss = `${source}/modules/preloader/preloader.scss`;
  const inputJs = `${source}/modules/preloader/preloader.js`;
  const output = `${target}/${dirs.copy[1]}/preloader`;

  const JS = function (inputJs) {
    return function jsBundle() {
      return browserify(inputJs, {
        debug: true
      })
        .transform(babelify, {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-object-assign'],
          sourceMaps: true
        })
        .bundle()
        .on('error', notify.onError({
          sound: false,
          title: 'preloaderJS',
          message: error => error.message
        }))
        .pipe(vsource(path.basename(inputJs)))
        .pipe(buffer())
        .pipe(gulpif(isProd, uglify()))
        .pipe(gulp.dest(output));
    };
  };

  tasks.push(new JS(inputJs));
  const jsDone = done => {
    browserSync.reload();
    done();
  };

  gulp.task('preloaderCss', () => gulp.src(inputCss)
    .pipe(plumber({
      errorHandler: notify.onError({
        sound: false,
        title: 'preloaderCss',
        message: error => error.message
      })
    }))
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpif(isProd, cssnano({
      discardComments: {
        removeAll: true
      },
      minifyFontValues: {
        removeQuotes: false
      },
      reduceIdents: false,
      zindex: false
    })))
    .pipe(gulp.dest(output)));

  gulp.task('preloader', gulp.series(gulp.parallel(...tasks, 'preloaderCss'), jsDone));
};