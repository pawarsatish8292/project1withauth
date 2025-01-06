import logger from '../utils/logger.js';

export const logApiCalls = (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startTime;
        logger.info(
            `API: ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Time: ${duration}ms`
        );
    });

    next();
};
