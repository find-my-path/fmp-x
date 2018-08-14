const mongoose = require('mongoose')

const { logger } = require('../utils')

const connectionString = process.env.MONGODB_URI

const connectionOptions = {
    useNewUrlParser: true
}

mongoose.connection.on('connected', () => {
    logger.info('Mongo connected')
})

mongoose.connection.on('error', (err) => {
    logger.error('Mongo failed to connect')
})

mongoose.connection.on('disconnected', () => {
    logger.info('Mongo disconnected')
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        logger.info('Mongo connection terminated')
    })
    process.exit(0)
})

const start = () => {
    mongoose.connect(connectionString, connectionOptions)
}

module.exports = {
    start
}