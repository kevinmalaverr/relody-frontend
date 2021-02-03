import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import app from '../src/index.server'
import reducer from '../src/redux/reducers'
import initialState from '../initialState.json'
import { ChunkExtractor } from '@loadable/server'
import { Helmet } from 'react-helmet'

const setResponse = (html, preloadedState, extractor) => {
  const helmet = Helmet.renderStatic()
  return (/* html */`
    <!DOCTYPE html>
    <html lang="en" class="theme-light">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="icon" type="image/png" href="/assets/favicon.png">
        ${helmet.title.toString()}
        ${extractor.getStyleTags()}
        ${extractor.getLinkTags()}
      </head>
      <body>
        <div id="app">${html}</div>
        <script id="preloadedState">
          <!-- window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')} -->
        </script>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `)
}

/**
 * express middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const renderApp = (req, res, next) => {
  // test if the url is a file
  if (new RegExp(/\..*$/).test(req.url)) {
    return next()
  }

  const context = {}

  const extractor = new ChunkExtractor({ statsFile: `${__dirname}/public/loadable-stats.json` })
  const store = createStore(reducer, initialState)
  const preloadedState = store.getState()
  const html = renderToString(
    extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(app)}
        </StaticRouter>
      </Provider>
    )
  )
  res.send(setResponse(html, preloadedState, extractor))
}
