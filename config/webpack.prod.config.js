const path = require("path");
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 压缩包体积
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "../src/components/index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: "umd",
    library: "ReactCmp",
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /(\.css|.less)$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-laoder",
            options: {
              modules: true,
            },
          },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    // 插件
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
};
