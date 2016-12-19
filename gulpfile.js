var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var vueify = require("vueify");
var sass = require("gulp-sass");

gulp.task('vue', function() {
    return browserify("./assets/vue/app.js")
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./assets/compiled/js/script.js"))
});

gulp.task('sass', function() {
    return gulp.src('./assets/sass/includes.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/compiled/css'));
});

gulp.task('default', ['vue', 'sass'], function() {
    gulp.watch('./assets/vue/*.js', ['vue']);
    gulp.watch('./assets/sass/*.scss', ['sass']);
});
