const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/mipsum.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mipsum.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config;
