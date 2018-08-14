const server = require('./server')
const database = require('./database')

module.exports = {
    server: server.start,
    database: database.start
}