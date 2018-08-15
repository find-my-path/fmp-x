const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const calculatorRoutes = require('./calculator.routes')

app.use('/', bodyParser.json())
app.use('/', calculatorRoutes)

module.exports = app