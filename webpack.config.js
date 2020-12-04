const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCSSExtractPlugin()
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
        test: /\.scss$/,
        use: [{
          loader: MiniCSSExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
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
