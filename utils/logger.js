import winston from 'winston';

const logger = winston.createLogger({
    level: 'info', // Default log level
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'logs/errors.log', level: 'error' }), // Log errors to file
        new winston.transports.File({ filename: 'logs/combined.log' }) // Log all info to file
    ],
});

export default logger;
