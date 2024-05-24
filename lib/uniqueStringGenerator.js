/**
 * Generates a unique string of specified length.
 * Combines random characters from a predefined set with a timestamp.
 *
 * @param {number} length - The desired length of the random character portion of the string.
 * @returns {string} - A unique string composed of random characters followed by a timestamp.
 */
const uniqueStringGenerator = (length) => {
  // Define the set of characters to use in the random portion of the string
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = '' // Initialize the result string
  const charactersLength = characters.length // Get the length of the characters set

  // Generate the random character portion of the string
  for (let i = 0; i < length; i++) {
    // Select a random character from the set and append it to the result
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  // Get the current timestamp and convert it to base 36 for a more compact representation
  const timestamp = Date.now().toString(36)

  // Combine the random characters with the timestamp and return the result
  return result + timestamp
}

export default uniqueStringGenerator
