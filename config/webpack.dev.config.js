const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-laoder']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
      port: 3000,
      open: true,
      hot: true
    }
}