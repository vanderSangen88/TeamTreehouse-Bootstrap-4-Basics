var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],
                    publicPath: '/dist'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bootstrap 4 Basics',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            allChunks: true,
            disable: false,
            filename: '/css/[name].bundle.css'
        })
    ]
}