'use strict'

require('dotenv').config()

const server = require('./server')

const port = process.env.APP_BASE_PORT || 8080

server.start({
    port: port
}).then(app => {
    console.log('Application is running on port ' + port)
})