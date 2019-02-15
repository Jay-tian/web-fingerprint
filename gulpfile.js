var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel");
 
gulp.task('minify', function () {
    return gulp.src('./src/index.js') // 要压缩的js文件
    .pipe(babel())
    .pipe(uglify())  
    .pipe(gulp.dest('./dist')); //压缩后的路径
});