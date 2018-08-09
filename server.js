const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

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