const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const { logger } = require('./server/utils')

const app = express()
const PORT = process.env.PORT || 5000

// Configure middleware
app.use(morgan('combined', { stream: logger.stream }))

// Configure Database Connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err) => {
    if (err) {
        return logger.error('There was an error connecting to Mongo')
    }
    return logger.info('Connected to Mongo')
})

// Configure Endpoints
app.get('/api', (req, res) => {
    res.send('Hello, World!')
})

// Serve Static Content
app.use(express.static(`${__dirname}/dist`))
app.all("/*", function(req, res, next) {
    res.sendfile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => logger.info(`Listening on port: ${PORT}`))