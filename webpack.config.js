const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEMO_DIR = path.resolve(__dirname, 'demo')

const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mipsum.js',
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: DEMO_DIR,
    },
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
