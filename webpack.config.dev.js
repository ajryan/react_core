var path = require('path');
var webpack = require('webpack');

module.exports = {
    plugins: [
        // dev-only plugins
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            moduleFilenameTemplate: path.relative('./wwwroot/dist', '[resourcePath]')
        })
    ]
};