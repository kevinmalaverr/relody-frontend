import express from 'express'
import config from '../config'
import { developmentConfig } from './development'
import { renderApp } from './render'
import helmet from 'helmet'

const app = express()

if (config.ENV === 'development') {
  console.log('running on development mode')
  developmentConfig(app)
} else {
  console.log('running on production mode')
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
}

app.get('*', renderApp)

app.listen(8080, () => {
  console.log('listen on port 8080')
})
