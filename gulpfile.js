var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require ('gulp-plumber');
var imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.start('sass');
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('imagemin', function () {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
