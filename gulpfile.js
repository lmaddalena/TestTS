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

/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['src/**/*.js'],
    maps:  ['src/**/*.js.map']
};

gulp.task('clean', function () {
    console.log("Cleaning dist & maps folders");
    return del(['dist/**/*', 'maps/**/*']);
});

gulp.task('default', function () {
    
    console.log('Moving .js files in dist folder');

    gulp.src(paths.scripts)
       .pipe(gulp.dest('dist'))
       .on('end', function(){ del(paths.scripts); });

    console.log('Moving .map files in dist folder');

    gulp.src(paths.maps)
        .pipe(gulp.dest('maps'))
        .on('end', function(){ del(paths.maps); });        
});


