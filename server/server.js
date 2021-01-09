import express from 'express'
import config from '../config'
import { developmentConfig } from './development'

const app = express()

if (config.ENV === 'development') {
  developmentConfig(app)
}

app.get('*', (req, res, next) => {
  res.send({
    hola: 100
  })
})

app.listen(8080, () => {
  console.log('listen on post 8080')
})
