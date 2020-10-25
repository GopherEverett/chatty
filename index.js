'use strict'

require('dotenv').config()

const server = require('./server')

const port = process.env.PORT || 8080

server.start({
    port: port
}).then(app => {
    console.log('Application is running on port ' + port)
})