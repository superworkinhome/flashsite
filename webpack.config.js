const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/hello",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "static.js"
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],

        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ],
  },

  resolve: {

    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  },

  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) { 
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map",

  plugins: [
    // ...
  ],

  watch: true,
  watchOptions: {
    aggregateTimeout: 1000
  },
};
