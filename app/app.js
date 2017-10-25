'use strict'

let express = require('express')
let restApi = require('./adapters/rest/index')

let PORT = process.env.PORT

if (!PORT) {
  throw new Error('PORT environment variable is not defined')
}

let app = express()
app.use('/api', restApi)

let server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
  server.on('close', () => {
    console.log('Server closed')
  })
})

module.exports = server
