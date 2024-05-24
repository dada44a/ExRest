/**
 * Middleware to limit the number of concurrent requests to the server.
 *
 * @param {number} maxConcurrentRequests - The maximum number of concurrent requests allowed.
 * @returns {Function} - The middleware function.
 */
const limitRequests = (maxConcurrentRequests) => {
  // Track the number of active requests
  let activeRequests = 0

  /**
     * Middleware function to handle incoming requests.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
  return (req, res, next) => {
    // Check if the number of active requests exceeds the maximum allowed
    if (activeRequests >= maxConcurrentRequests) {
      // Respond with a 503 Service Unavailable status if the server is too busy
      res.status(503).send('Server is busy. Please try again later.')
      return
    }

    // Increment the count of active requests
    activeRequests++

    // Decrement the count of active requests when the response finishes
    res.on('finish', () => {
      activeRequests--
    })

    // Proceed to the next middleware function or route handler
    next()
  }
}

// Export the limitRequests middleware function as the default export
export default limitRequests
