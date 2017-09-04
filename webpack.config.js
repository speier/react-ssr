const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dst: path.resolve(__dirname, 'build')
}

module.exports = {
  entry: {
    main: path.resolve(paths.src, 'client.js')
  },
  output: {
    path: paths.dst,
    filename: 'static/js/[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: paths.src,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(paths.dst),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'public') }
    ])
  ]
};
