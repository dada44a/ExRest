// Import the Express framework for creating the server
import express from 'express'
// Import the CORS middleware for handling Cross-Origin Resource Sharing
import corsMiddleware from 'cors'

/**
 * Creates and configures an Express server based on a provided schema.
 * @param {Object} schema - The schema object containing endpoint definitions.
 * @param {boolean} [enableCors=true] - A flag to determine whether to enable CORS. Defaults to true.
 * @returns {Object} - The configured Express application.
 */
const exrest = (schema, enableCors = true) => {
  // Create a new Express application instance
  const app = express()

  // If CORS is enabled, apply the CORS middleware to the app
  if (enableCors) {
    app.use(corsMiddleware())
  }

  // Iterate over each endpoint defined in the schema and generate corresponding routes
  for (const endpoint of schema.endpoints) {
    const { method, path, controller } = endpoint
    // Define a route for each endpoint, converting the method to lowercase and mapping it to the appropriate controller function
    app[method.toLowerCase()](path, controller)
  }

  // Return the configured Express application instance
  return app
}

// Export both the exrest function and limitRequests function as properties of a single object
export default exrest
