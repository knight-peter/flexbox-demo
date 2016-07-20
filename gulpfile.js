var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync');


gulp.task('sass', function(){
    gulp.src('src/css/*')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })
    )
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('imagemin', function(){
    return gulp.src('src/images/*')
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [imageminPngquant()]
        })
    )
    .pipe(gulp.dest('dist/images'));
});

gulp.task('browserSync', function(){
    browserSync({server: true}, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
});

gulp.task('autoreload', function(){
    browserSync.reload();
});

gulp.task('watch',['browserSync'],function(){
    gulp.watch(['src/css/*'], ['sass']);
    gulp.watch(['src/images/*'], ['imagemin']);
    gulp.watch(['*.html'], ['autoreload']);
});

gulp.task('default', ['watch','sass','imagemin']);