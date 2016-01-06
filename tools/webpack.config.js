/**
 * Created by Novikov on 12/25/2015.
 */
'use strict';

var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/../src/Components/test_Component/FirstComponent'),
    output: {
        path: path.join(__dirname, '/../build'),
        filename: "build.js"
    },

    //module: {
    //    loaders: [{
    //        test: /\.jsx$/,
    //        include: [
    //            path.resolve(__dirname, '../src'),
    //        ],
    //        loader: 'babel-loader'
    //    }]
    //}
}