/**
 * Function to fetch data from the cache
 * @param {string} searchId - The API link to search for in the cache
 * @param {Array} cacheMemory - The cache array
 * @returns {Object|null} - Returns the cached object if found, otherwise null
 */
const fetchCache = (searchId, cacheMemory) => {
  return cacheMemory.find(item => item.link === searchId) || null
}

/**
 * Function to push data into the cache
 * @param {string} apiLink - The API link to associate with the data
 * @param {Object} object - The data object to cache
 * @param {Array} cacheMemory - The cache array
 * @returns {Object} - The newly cached object
 */
const cachePush = (apiLink, object, cacheMemory) => {
  const newObject = { ...object, link: apiLink } // Create a new object with the link property
  cacheMemory.push(newObject) // Push the new object into the cache
  return newObject // Return the newly cached object
}

/**
 * Function to fetch data from an API or the cache
 * @param {string} apiLink - The API link to fetch data from
 * @returns {Promise<Object>} - The fetched data object
 */
const cachedFetch = async (apiLink, cacheMemory) => {
  const cachedData = fetchCache(apiLink, cacheMemory) // Check if data is in the cache
  if (cachedData === null) {
    // If no cached data, fetch from the API
    try {
      const response = await fetch(apiLink) // Fetch data from the API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`) // Throw an error if the response is not ok
      }
      const object = await response.json() // Parse the JSON data from the response
      const obj = cachePush(apiLink, object, cacheMemory)
      const { link, ...cleanedData } = obj // Push the data into the cache
      console.log(link)
      return cleanedData // Return the fetched and cached data
    } catch (error) {
      console.error('Error fetching data: ', error) // Log any errors
      throw error // Ensure the error is propagated
    }
  } else {
    // If data is found in the cache, return it
    const { link, ...cleanedData } = cachedData // Push the data into the cache
    console.log(link)
    return cleanedData
  }
}
export default cachedFetch // Export the cacheFetch function as the default export
