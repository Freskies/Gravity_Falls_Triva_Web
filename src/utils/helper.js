/**
 * Extracts a random element from the given array and removes it.
 *
 * @param {Array<T>} array - The array from which to extract a random element.
 * @returns {T|null} - The randomly extracted element, or `null` if the array is empty.
 *
 * @example
 * const arr = [1, 2, 3, 4];
 * const randomElement = extractRandom(arr);
 * console.log(randomElement); // A random element from the array
 * console.log(arr); // The array with the random element removed
 */
function extractRandom (array) {
	if (!array?.length) return null;
	return array.splice(Math.floor(Math.random() * array.length), 1)[0];
}

export { extractRandom };