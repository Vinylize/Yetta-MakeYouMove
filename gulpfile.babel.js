import babel from 'gulp-babel';
import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import rimraf from 'rimraf';
import sourcemaps from 'gulp-sourcemaps';

const SOURCE = {
  ALL: 'src/**/*.js',
  DIST: 'dist'
};

gulp.task('default', ['build'], () => {
  return nodemon({
    script: './dist/index.js',
    watch: [SOURCE.ALL],
    tasks: ['build'],
    env: { NODE_ENV: 'development' }
  });
});

gulp.task('build', ['clean'], () => gulp.src(SOURCE.ALL)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist')));

gulp.task('clean', () => rimraf.sync(SOURCE.DIST));
