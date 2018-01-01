const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require ('write-file-webpack-plugin');


webpackConfig = {
    entry: {
        bundle: "./src/index.tsx",
        styles: "./src/assets/scss/styles.scss",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].js',
        library: '[name]',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                exclude: [/node_modules/],
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", 
              test: /\.js$/, 
              loader: "source-map-loader" 
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
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
              
        ]
    },
    
    plugins: [
        new ExtractTextPlugin('style.css'),
        new WriteFilePlugin()
    ]
};

module.exports = webpackConfig;