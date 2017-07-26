/*
    ./webpack.config.js
*/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: './client/index.html', filename: 'index.html', inject: 'body' })
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  }
}