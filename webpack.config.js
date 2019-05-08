const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV } = process.env;

const ASSETS = {
  main: path.resolve(__dirname, 'assets'),
  css: 'css/main.css'
}

const config = {
  mode: NODE_ENV,
  entry: './src/index.js',
  output: {
    path: ASSETS.main
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: 'postcss-loader'
          },
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ASSETS.css
    }),
  ],
}

module.exports = config;
