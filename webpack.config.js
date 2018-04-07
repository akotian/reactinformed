var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  mode: 'development',

  entry: {
  car_picker: './car_picker/src/index.js'
  },

  output: {
    path: path.resolve('./car_picker/assets/bundles/'),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        // test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['@babel/preset-env']
            presets: ['env', 'react', 'stage-2']
          }
        }
      }
    ]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}
