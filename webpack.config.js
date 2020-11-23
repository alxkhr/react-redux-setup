const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin(), new CopyWebpackPlugin({ patterns: ['res'] })],
  devtool: 'inline-source-map',
  devServer: {
    writeToDisk: true,
  },
};