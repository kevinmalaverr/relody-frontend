const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCSSExtractPlugin(),
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
        test: /\.(png|jpe?g|gif)$/i,
        use: { loader: 'file-loader' }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: { loader: 'file-loader' }
      }
    ]
  }
}
