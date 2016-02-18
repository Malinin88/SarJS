/**
 * Created by Novikov on 12/25/2015.
 */

var path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: path.join(__dirname, '/../src/app.js'),
    output: {
        path: path.join(__dirname, '../build/public'),
        filename: 'build.js'//,
        //todo: filename: DEBUG ? '[name].js?[hash]' : '[name].[hash].js',
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /\/node_modules\//, loader: 'babel-loader'},
            // query - The query of the request for the current loader
            {test: /\.jsx$/, exclude: /\/node_modules\//, loader: 'babel-loader', query:{presets:['react']}},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },

    //Add heavy-weight libraries, which do not contain any 'require' directives here
    //in order not to parse them and to make the build faster
    noParse: [
        /react\/lib\/React.js/
    ],

    //todo: uncomment it in future:
    //devtool: NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
    devtool: 'source-map',

    watch: NODE_ENV === 'development',

    watchOptions:{
        aggregateTimeout: 100
    },

    plugins: []
};

//Minify code for production
if (NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }));
}
