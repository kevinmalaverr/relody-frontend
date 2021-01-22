/**
 * webpack utilities for work in development
 * @param {*} app express app
 */
export function developmentConfig (app) {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-warnings'
  }))
  app.use(webpackHotMiddleware(compiler, {
    path: '/__what'
  }))
}
