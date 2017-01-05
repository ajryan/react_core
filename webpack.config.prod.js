var path = require('path');
var webpack = require('webpack');

module.exports = {
    plugins: [
        // prod-only plugins
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};