var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var config = {
    context: __dirname + '/src/app/global',
    entry: [

        // For hot style updates (remove for dist)
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates (remove for dist)
        'webpack-dev-server/client?http://localhost:8080',

        // Our application
        './global.js'
    ],
    output: {
        path: __dirname + '/src/app/global',
        filename: 'bundle.js'
    },
    externals: {
        'TweenLite': 'TweenLite',
        'Draggable': 'Draggable'
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    plugins: [
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })*/
    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded',
                ]
            }, {
                test: /\.html$/, // Only .html files
                loader: 'raw-loader'
            }, {
                loader: "babel-loader",
                exclude: /node_modules/,
                test: /\.js?$/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1"
            }, {
                include: [
                    path.resolve(__dirname, "src/assets/fonts"),
                    path.resolve(__dirname, "src/assets/icons")
                ],
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }, {
                include: [
                    path.resolve(__dirname, "src/assets/fonts"),
                    path.resolve(__dirname, "src/assets/icons")
                ],
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.(webm|mp4)$/,
                loader: "file-loader"

            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }, {
                exclude: [
                    path.resolve(__dirname, "src/assets/fonts"),
                    path.resolve(__dirname, "src/assets/icons")
                ],
                test: /\.svg$/,
                loader: 'raw-loader'
            }

        ]

    }
};

config.plugins.push(new webpack.HotModuleReplacementPlugin()) //(remove for dist)

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/src/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }));
    config.devtool = 'source-map';
}

module.exports = config;