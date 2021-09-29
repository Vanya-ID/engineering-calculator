const path = require("path");

module.exports = {
  entry: [
    "./js/reverse-polish-notation/reverse-polish-notation.js",
    "./js/utils/inserts/inserts.js",
    "./js/utils/clean/clean.js",
    "./js/utils/live-parsing/live-parsing.js",
    "./js/utils/memory/memory.js",
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
