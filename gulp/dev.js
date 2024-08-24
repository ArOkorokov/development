const gulp = require('gulp');
const htmlInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const webpack = require('webpack-stream');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs')



gulp.task('clean:dev',function(done) {
    if(fs.existsSync('./build/')) {
        return gulp
        .src('./build/',{read:false})
        .pipe(clean({force:true}))
    } else {
        console.log('Folder is not found')
        done()
    }
})


gulp.task('html:dev',function() {
    return gulp
            .src('./src/*.html')
            .pipe(htmlInclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest('./build'))
})


gulp.task('sass:dev', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
})

gulp.task('copy:dev', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(gulp.dest('./build/img/'))
})
gulp.task('copy2:dev', function() {
    return gulp
        .src('./src/video/**/*')
        .pipe(gulp.dest('./build/video/'))
})

gulp.task('fonts:dev', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts/'))
})
gulp.task('icons:dev', function() {
    return gulp
        .src('./src/icons/**/*')
        .pipe(gulp.dest('./build/icons/'))
})
gulp.task('js:dev', function(){
    return gulp
        .src('./src/js/*.js')
        .pipe(webpack(require('.././webpack.config')))
        .pipe(gulp.dest('./build/js/'))
})

gulp.task('webserver:dev', function() {
    return gulp
    .src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch:dev', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'));
    gulp.watch('./src/html_modules/**/*.html', gulp.parallel('html:dev'));
    gulp.watch('./src/img/**/*', gulp.parallel('copy:dev'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'));
    gulp.watch('./src/icons/**/*', gulp.parallel('icons:dev'));
    gulp.watch('./src/js/*.js', gulp.parallel('js:dev'));
    gulp.watch('./src/*.html', gulp.parallel('html:dev'));
})