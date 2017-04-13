var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('compile', function() {
    nodemon({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT: 8000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('Restarting');
        });
});
gulp.task('default', ['compile']);