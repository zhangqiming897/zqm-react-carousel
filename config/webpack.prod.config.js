const path = require('path');
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩包体积
const nodeExternals  = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../lib'),
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
    externals: [nodeExternals()],
    plugins: [ // 插件
      new CleanWebpackPlugin()
    ]
}