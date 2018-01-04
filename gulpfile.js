//var gulp = require("gulp");
//var ts = require("gulp-typescript");
//var sourcemaps = require('gulp-sourcemaps');
//var tsProject = ts.createProject("tsconfig.json");

//gulp.task('default', function () {
//    gulp.src('src/**/*.ts')
//        .pipe(sourcemaps.init())
//        .pipe(ts())
//        .pipe(sourcemaps.write('../maps'))
//        .pipe(gulp.dest('dist'))    
//});

/*
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');


gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
*/

/*
gulp.task("default", function () {
    tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest("dist"));
});
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['src/**/*.js']
};

gulp.task('clean', function () {
    console.log("Cleaning dist folder");
    return del(['dist/**/*']);
});


