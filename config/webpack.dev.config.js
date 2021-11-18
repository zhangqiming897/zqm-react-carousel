const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 路径映射
    },
    // 需要解析的扩展名
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              { targets: { node: "current" } },
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: ["@babel/plugin-syntax-jsx"],
          },
        },
        exclude: "/node_modules/",
      },
      // 使用 ts
      {
        test: /(\.tsx|\.ts)$/,
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
      template: path.resolve(__dirname, "../public/index.html"),
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
