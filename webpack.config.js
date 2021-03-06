var webpack = require('webpack');

module.exports = {
    context : __dirname + '/',
    entry : './lib/spark.js',
    externals : {
        jquery : 'jQuery'
    },
    output : {
        filename : 'spark.js',
        library : 'CiscoSpark',
        libraryTarget : 'umd',
        path : __dirname + '/'
    },
    plugins : [
        new webpack.ProvidePlugin({
            $ : 'jquery',
            jQuery : 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve : {
        root : [__dirname + '/lib/']
    }
};
