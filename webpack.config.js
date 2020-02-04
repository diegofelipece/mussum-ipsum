const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEMO_DIR = path.resolve(__dirname, 'demo')

const config = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mipsum.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: DEMO_DIR,
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${DEMO_DIR}/index.html`,
      filename: 'index.html',
      inject: 'head',
    }),
  ]
}

module.exports = config
