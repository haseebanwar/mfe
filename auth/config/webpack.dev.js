const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const PORT = 8083;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthIndex': './src/bootstrap',
      },
      shared: packageJSON.dependencies,
    }),
    new HTMLWebpackPlugin({ template: './public/index.html' }),
  ],
};

module.exports = merge(commonConfig, devConfig);
