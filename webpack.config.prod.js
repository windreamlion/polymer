// import path from "path";
// import webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import OpenBrowserPlugin from "open-browser-webpack-plugin";

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var autoprefixer = require('autoprefixer');

// const myLocalIP = require('my-local-ip');

const port = 8080;

const srcPath = path.join(__dirname, 'src');
const examplePath = path.join(__dirname, 'example');

const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1',
];

// const host = myLocalIP();

// console.log("host:", host);
//+ host + ':' + port
module.exports = {

    entry: [
        'babel-polyfill',
        './src/app'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    resolve: {
        extensions: ["", ".jsx", ".js", ".scss"]
        // alias: {
        //     'react-fabricjs': path.join(__dirname, 'src'),
        //     'react-fabricjs/lib': path.join(__dirname, 'src'),
        // },
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(__dirname, './src')]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
                include: path.join(__dirname, 'example'),
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader',
                    'postcss-loader?parser=postcss-scss',
                ],
            },
            // {
            // 	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // 	loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
            // },
            // {
            // 	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // 	loader: "file-loader?name=[name].[ext]"
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ],
        noParse: [],
    },

    postcss: function plugins(bundler) {
        console.log('bundler:', bundler)
        return [
            require('postcss-import')({addDependencyTo: bundler}),
            require('precss')(),
            require('autoprefixer')({browsers: AUTOPREFIXER_BROWSERS}),
        ];
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),

        new HtmlWebpackPlugin({
            title: 'Post-Canvas',
            template: path.join('dist', 'base.ejs'),
            inject: 'true',
            filename: 'index.html',
            chunks: ['src']
        }),
        new OpenBrowserPlugin({url: 'http://localhost:' + port})
    ]

};
//
// deps.forEach(function (dep) {
// 	var depPath = path.resolve(nodeModules, dep);
// 	config.resolve.alias[dep.split(path.sep)[0]] = depPath;
// 	config.module.noParse.push(depPath);
// });

// module.exports = config;
