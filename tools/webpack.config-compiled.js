/**
 * Created by Novikov on 12/25/2015.
 */
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    entry: _path2.default.join(__dirname, '/../src/Components/test_Component/FirstComponent'),
    output: {
        path: _path2.default.join(__dirname, '/../build'),
        filename: "build.js"
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map