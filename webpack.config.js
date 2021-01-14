const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const Dotenv = require('dotenv-webpack')
const config = require('./config')

const isDev = (config.ENV === 'development')
const entry = ['./src/index.js']

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')
}

module.exports = {
  entry,
  mode: config.ENV,
  output: {
    path: path.resolve(__dirname, 'server/public'),
    filename: 'assets/app.js',
    publicPath: '/'
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    new MiniCSSExtractPlugin({
      filename: 'assets/app.css'
    }),
    new Dotenv(),
    new LoadablePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCSSExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        }, {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-import'
                ]
              ]
            }
          }
        }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]'
          }
        }
      }
    ]
  }
}
