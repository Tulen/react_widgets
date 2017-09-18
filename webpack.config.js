const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./src/widgets.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
  ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: 'source-map',
};