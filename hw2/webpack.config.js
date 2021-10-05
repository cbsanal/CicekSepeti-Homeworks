/* eslint-disable */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/js/allFiles.js'],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.jpeg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    static: './src/',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'src/'),
    publicPath: '',
    filename: 'bundle.js',
  },
};
