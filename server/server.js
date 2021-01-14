import express from 'express'
import config from '../config'
import { developmentConfig } from './development'
import { renderApp } from './render'
import { ChunkExtractor } from '@loadable/server'
import helmet from 'helmet'
import { routes } from '../src/routes'

const app = express()

if (config.ENV === 'development') {
  developmentConfig(app)
} else {
  console.log('produciton')
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
}

// for (const prop in routes) {
//   app.get(routes[prop], renderApp)
// }

app.get('*', renderApp)

app.listen(8080, () => {
  console.log('listen on post 8080')
})
