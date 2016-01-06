/**
 * Created by Novikov on 12/25/2015.
 */
'use strict';

import path from 'path';

module.exports = {
    entry: path.join(__dirname, '/../src/Components/test_Component/FirstComponent'),
    output: {
        path: path.join(__dirname, '/../build'),
        filename: "build.js"
    }
}