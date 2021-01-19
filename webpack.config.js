const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const config = require('./config')

const isDev = (config.ENV === 'development')
const entry = ['./src/index.js']

if (isDev) {
  console.log('dev')
  entry.push('webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false&reload=true')
}

console.log(config.ENV)

module.exports = {
  entry,
  mode: config.ENV,
  output: {
    path: path.resolve(__dirname, 'server/public'),
    filename: 'assets/app.js',
    publicPath: '/'
  },
  plugins: [
    new LoadablePlugin({ writeToDisk: true }),
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    // isDev ? () => {} : new CompressionPlugin({
    //   test: /\.(js|css)$/,
    //   filename: '[path][base].gz'
    // }),
    new MiniCSSExtractPlugin({
      filename: 'assets/app.css'
    }),
    new Dotenv()
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
  },
  devServer: {
    historyApiFallback: true
  }
}
