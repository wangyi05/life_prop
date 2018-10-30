var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: { 
      path: __dirname, 
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
  module: {
  rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        exclude: '/node_modules/',
        loader: 'json-loader'
      },
      {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/public/assets'
      }
    ]
  },
  devServer: {
  	contentBase: './public',
  	historyApiFallback: true,
  	inline: true
  }
};