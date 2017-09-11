const ExtractTextPlugin = require('extract-text-webpack-plugin');
path = require('path');

module.exports = {
  entry: [ path.join(__dirname, '/src/main.js'), path.join(__dirname, '/src/main.css') ],
  output: { path: path.join(__dirname, '/public'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css-loader!postcss-loader'
        ),
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devtool: 'source-map',
};
