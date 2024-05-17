// api-generator.js

const express = require('express');

function exrest(schema) {
    const app = express();

    // Parse schema and generate routes
    for (const endpoint of schema.endpoints) {
        const { method, path, controller } = endpoint;
        app[method.toLowerCase()](path,controller);
    }

    return app;
}

const limitRequests = (req, res, next) => {
    if (activeRequests >= MAX_CONCURRENT_REQUESTS) {
        res.status(503).send('Server is busy. Please try again later.');
        return;
    }

    activeRequests++;
    res.on('finish', () => {
        activeRequests--;
    });

    next();
};

module.exports = {exrest,limitRequests};
