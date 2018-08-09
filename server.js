const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

// Configure Database Connection
mongoose.connect(process.env.MONGODB_URI, {}, (err) => {
    if (err) {
        console.log(process.env.MONGODB_URI)
        return console.log('There was an error connecting to Mongo')
    }
    return console.log('Connected to Mongo')
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

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))