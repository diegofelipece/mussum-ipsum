const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEMO_DIR = path.resolve(__dirname, 'demo/modules')

const config = {
  mode: 'development',
  entry: './demo/modules/script.js',
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'demo.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: {
      directory: DEMO_DIR,
    },
    compress: false,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${DEMO_DIR}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ]
}

module.exports = config
