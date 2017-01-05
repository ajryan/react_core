var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });

var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');

var extractCSS = new ExtractTextPlugin('site.css');

module.exports = merge({
    resolve: {
        extensions: [ '', '.js', '.jsx', '.ts', '.tsx' ]
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, include: /app/, loader: 'ts-loader?silent=true' },
            { test:/\.css/, loader: extractCSS.extract(['css-loader']) }
        ]
    },
    entry: {
        main: ['./app/app.ts']
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    plugins: [
        extractCSS,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        })
    ]
}, isDevelopment ? devConfig : prodConfig);