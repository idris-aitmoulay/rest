import http from 'http'
import { env, mongo, port, ip } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(api)
const server = http.createServer(app)

mongoose.connect(mongo.uri)

setImmediate(() => {
  server.listen(port, () => {
    console.log('Express server listening on port :%d, in %s mode', port, env)
  })
})

export default app
