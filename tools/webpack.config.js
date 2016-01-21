/**
 * Created by Novikov on 12/25/2015.
 */

var path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: path.join(__dirname, '/../public/javascripts/Components/test_Component/FirstComponent'),
    output: {
        path: path.join(__dirname, '/../public/build'),
        filename: "build.js"//,
        /*library: "firstComponent"*/ /// for external access
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /\/node_modules\//, loader: 'babel-loader'},
            { test: /\.jsx$/, exclude: /\/node_modules\//, loader: 'babel-loader'}
        ]
    },

    //Add heavy-weight libraries, which do not contain any 'require' directives here
    //in order not to parse them and to make the build faster
    noParse: [
        /react\/lib\/React.js/
    ],

    devtool: NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',

    watch: NODE_ENV === 'development',

    watchOptions:{
        aggregateTimeout: 100
    },

    plugins: []
};

//Minify code for production
if(NODE_ENV === 'production'){
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }));
}