const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    npm: path.resolve(__dirname, './node_modules'),
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist'),
    destination: path.resolve(__dirname, 'build'),
};

const limits = {
    url: 8192,
};

const config = {
    devtool: 'source-map',
    entry: {
        app: [
            path.join(paths.src, 'index.tsx'),
        ],
    },
    output: {
        path: paths.destination,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                exclude: [/node_modules/],
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader"
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
            // {
            //     test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: limits.url,
            //                 mimetype: 'application/octet-stream',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['build']),
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
        // new webpack.ProvidePlugin({
        //     '$': 'jquery',
        //     'jQuery': 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        // }),
        new HtmlWebpackPlugin({
            hash: true,
            xhtml: true,
            minify: {
                html5: true,
                removeComments: true,
                collapseWhitespace: true,
                removeTagWhitespace: true,
                title: 'Join.Chat',
            },
            favicon: path.join(paths.dist, 'favicon.ico'),
            template: path.join(paths.dist, 'index.html'),
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
        extensions: ['.js', '.jsx','.tsx', '.ts'],
    },
};

module.exports = config;