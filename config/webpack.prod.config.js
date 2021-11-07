const path = require('path');
// 导入每次删除文件夹的插件
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(_dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(_dirname, '../lib'),
        libraryTarget: 'umd',
        library: 'ReactCmp'
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
    plugins: [ // 插件
      new cleanWebpackPlugin(['../lib'])
    ]
}