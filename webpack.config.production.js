'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    npm: path.resolve(__dirname, './node_modules'),
    src: path.resolve(__dirname, './src'),
    static: path.resolve(__dirname, './public'),
    destination: path.resolve(__dirname, 'build/product'),
};

const limits = {
    url: 8192,
};

const config = {
    devtool: 'source-map',
    entry: {
        app: [
            path.join(paths.src, 'index.jsx'),
        ],
    },
    output: {
        path: paths.destination,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // resolve-url-loader may be chained before sass-loader
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: limits.url,
                            mimetype: 'image/svg+xml',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: limits.url,
                            mimetype: 'application/octet-stream',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: Infinity,
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: true,
        //     comments: false,
        //     compress: {
        //         sequences: true,
        //         booleans: true,
        //         loops: true,
        //         unused: true,
        //         warnings: false,
        //         drop_console: true,
        //         unsafe: true,
        //     },
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            xhtml: true,
            minify: {
                html5: true,
                removeComments: true,
                collapseWhitespace: true,
                removeTagWhitespace: true,
            },
            favicon: path.join(paths.static, 'favicon.ico'),
            template: path.join(paths.static, 'index.html'),
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: '[contenthash].css',
        }),
    ],
    resolve: {
        alias: {
            npm: paths['npm'],
            views: path.join(paths.src, 'views'),
            components: path.join(paths.src, 'components'),
        },
        extensions: ['.js', '.jsx'],
    },
};

module.exports = config;
