let webpack = require('webpack')
let path = require('path')

let BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
let APP_DIR = path.resolve(__dirname, 'src/frontend/app');
let config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
    module: {
      rules: [
          {
              test: /\.jsx?/,
              include: APP_DIR,
              use: 'babel-loader',
          }
      ]
  },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 8080
    }
};
module.exports = config;
