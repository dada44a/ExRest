const limitRequests = require('./limitRequest')
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


// Export both functions as properties of a single object
module.exports = {
    exrest,
    limitRequests
};
