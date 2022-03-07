const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../example/index"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist/development"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"), // 路径映射
    },
    // 需要解析的扩展名
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [ 
      {
        test: /\.js(x)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          },
        },
        exclude: "/node_modules/",
      },
      // 使用 ts
      {
        test: /\.ts(x)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /(\.css|.less)$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
            },
          },
          { loader: "less-loader" },
        ],
      },
      // 在 node_modules 中的 css，不开启
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "../example/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  devServer: {
    open: true,
    hot: true,
  },
};
