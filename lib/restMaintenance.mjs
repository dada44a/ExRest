// restMaintenance.mjs

/**
 * Maintenance middleware function
 * @param {boolean} isMaintenanceMode - Indicates whether the site is in maintenance mode
 * @returns {Function} Middleware function
 */
const restMaintenance = (isMaintenanceMode) => {
  return (req, res, next) => {
    if (isMaintenanceMode) {
      // If in maintenance mode, redirect to a maintenance page
      res.status(503).send('Sorry, we are currently undergoing maintenance. Please try again later.')
    } else {
      // Otherwise, proceed to the next middleware or route handler
      next()
    }
  }
}

export default restMaintenance
