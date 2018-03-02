var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = {
    entry: 'bootstrap-loader',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        // , publicPath: '/TeamTreehouse-Bootstrap-4-Basics/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader', options: { 
                            importLoaders: 1, 
                            config: {
                                path: 'postcss.config.js'
                            } 
                        } 
                    },
                    'postcss-loader'
                  ]
                })
              },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(woff2?|svg)$/, use: ['resolve-url-loader', 'url-loader?limit=10000']
            },
            {
                test: /\.(ttf|eot)$/, use: 'file-loader'
            },
            { 
                test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, use: 'imports-loader?jQuery=jquery' 
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Tether: "tether",
          "window.Tether": "tether",
          Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
          Button: "exports-loader?Button!bootstrap/js/dist/button",
          Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
          Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
          Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
          Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
          Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: "exports-loader?Util!bootstrap/js/dist/util",
        }),
        extractPlugin
      ]
};