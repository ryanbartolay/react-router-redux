var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        App: "./app/App.jsx"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"), // this is to get the images from prod dist
        inline: true,
        port: 9000,
        stats: "errors-only",
        open: true,
        compress: true,
    },

    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: '/font/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(sass|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home Page',
            minify: {
                collapseWhitespace: false // set to true to minify source on html
            },
            hash: true,
            chunks: ['App'],
            filename: 'index.html',
            template: './app/templates/index.html', // Load a custom template (ejs by default see the FAQ for details)
        })
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'app/components'),
        },
        extensions: [".js", ".jsx"],
        modules: [path.resolve(__dirname, "app"), "node_modules"]
    }
}
