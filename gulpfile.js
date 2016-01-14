// Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

/**
 * Lints the config files
 */
gulp.task('lint:config', function(){
    return gulp.src('./gulpfile.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

/**
 * Lints lib js
 */
gulp.task('lint:lib', function(){
    return gulp.src([
            'lib/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

/**
 * Runs style check on config files
 */
gulp.task('jscs:config', function(){
    return gulp.src('./gulpfile.js')
        .pipe(jscs({
            configPath : '.jscsrc',
            fix : true
        }))
        .pipe(gulp.dest('./'));
});

/**
 * Runs style check on lib js
 */
gulp.task('jscs:lib', function(){
    return gulp.src([
            'lib/*.js'
        ])
        .pipe(jscs({
            configPath : '.jscsrc',
            fix : true
        }))
        .pipe(gulp.dest('lib'));
});

/**
 * Builds the module
 */
gulp.task('webpack', function(){
    return gulp.src('lib/spark.js')
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('dist/'));
});

/**
 * Runs the webpack dev server for live testing
 */
gulp.task('dev', function(){
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        contentBase : __dirname + '/lib',
        stats : {
            colors : true
        }
    }).listen(8889, 'localhost', function(err){
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }

        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8889/index.html');
    });
});

/**
 * Task to run all lint subtasks
 */
gulp.task('lint', ['lint:config', 'lint:lib', 'jscs:config', 'jscs:lib']);

/**
 * Default gulp task
 */
gulp.task('default', function(callback){
    runSequence('lint', 'webpack', callback);
});
