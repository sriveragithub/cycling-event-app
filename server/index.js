const path = require('path')
const http = require('http')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const server = http.createServer(app)

const host = '127.0.0.1'
const port = 4000

const logger = morgan('tiny')

app.use(logger)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Welcome to the app!')
})

server.listen(port, host, () => {
    console.log(`Listening at http://${host}:${port}/`)
})