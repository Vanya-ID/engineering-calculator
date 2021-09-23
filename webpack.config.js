const path = require("path");

module.exports = {
  entry: [
    "./js/reverse-polish-notation.js",
    "./js/inserts.js",
    "./js/clean.js",
    "./js/live-parsing.js",
    "./js/memory/memory.js",
    "./js/calculator/calculator.js",
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};
