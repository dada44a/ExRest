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

module.exports = exrest;
