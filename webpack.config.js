const path = require('path');

module.exports = {
    mode: "production", // 生产模式
    entry: {
        "Carousel": path.resolve(__dirname, './src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].min.js',
        publicPath: './build/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                           presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }, 
                    {
                        loader: 'ts-loader'
                    }
                ],
                include: path.resolve(__dirname, "./src/")
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?module&localIdentName=[hash:8]',
                include: path.resolve(__dirname, "./src/"), 
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    externals: {
        react: 'react'
    }
}