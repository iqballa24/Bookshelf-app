const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/"),
    },
    compress: true,
    port: 9000,
    liveReload: true,
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist/"),
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ],
});
