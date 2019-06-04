const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/mipsum.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mipsum.js'
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
