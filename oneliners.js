// combine arrays into a single array
const combine = (...arrays) => [].concat(...arrays);

// flatten an array
const flatten = array => [].concat(...array);

// flush the promise queue; useful for testing asynchronous code
const nextTick = async () => new Promise(resolve => setImmediate(resolve));

// generate an array of integers of given length
const range = (length, step) =>
  Array.from({ length }).map((_, i) => i + (step || 0));

// remove all duplicate elements from an array
const unique = array => Array.from(new Set(array));
