const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.LOGGING_LEVEL,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger;
module.exports.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
}