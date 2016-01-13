/**
 * Created by Novikov on 12/25/2015.
 */
'use strict';

var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: path.join(__dirname, '/../src/Components/test_Component/FirstComponent'),
    output: {
        path: path.join(__dirname, '/../build'),
        filename: "build.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.jsx$/, loader: 'babel-loader'}
        ]
    },

    devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : 'source-map',

    watch: NODE_ENV == 'development',

    watchOptions:{
        aggregateTimeout: 100
    }
}