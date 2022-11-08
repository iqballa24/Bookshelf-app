const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: { import: "./src/js/app.js", dependOn: "shared" },
    login: { import: "./src/js/login.js", dependOn: "shared" },
    shared: ["./src/js/shared.js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["app", "shared"],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login", "shared"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: false,
};
