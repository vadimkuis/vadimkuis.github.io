const gulp = require("gulp");
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function lessCompile() {
    return gulp.src('./src/style/styles.less').pipe(less()).pipe(gulp.dest('./dist/css'));
}

function cssMin() {
    return gulp.src('dist/css/styles.css').pipe(cssmin()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('dist/css'));
}

gulp.task("less", lessCompile);
gulp.task("cssmin", cssMin);
gulp.task("watch", () => {
    return gulp.watch('./src/style/styles.less',
    {ignoreInitial: false},
    gulp.series("less", "cssmin"),
);});

gulp.task("default", gulp.series("less", "cssmin"));


