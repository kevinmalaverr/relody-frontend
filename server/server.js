import express from 'express'
import config from '../config'
import { developmentConfig } from './development'
import { renderApp } from './render'

const app = express()

if (config.ENV === 'development') {
  developmentConfig(app)
}

app.get('*', renderApp)

app.listen(8080, () => {
  console.log('listen on post 8080')
})
