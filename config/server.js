const express = require('express')
const morgan = require('morgan')

const calculator = require('../calculator')

const { logger } = require('../utils')

const app = express()
const PORT = process.env.PORT || 5000

// Configure middleware
app.use(morgan('combined', { stream: logger.stream }))

// Configure Endpoints
app.get('/api', (req, res) => {
    res.send('Hello, World!')
})

app.use('/api/calculator', calculator)

// Serve Static Content
app.use(express.static(`${__dirname}/../web/dist`))
app.all("/*", function(req, res, next) {
    res.sendfile(`${__dirname}/../web/dist/index.html`);
});

const start = () => {
    app.listen(PORT, () => logger.info(`Listening on port: ${PORT}`))
}

module.exports = {
    start
}