const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingIndex': './src/bootstrap',
      },
      shared: packageJSON.dependencies,
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);
