// Question 1: ES6 Features
// lowerCaseWords takes a mixed array, returns a promise that
// resolves with the lower-cased strings, or rejects if the input is not an array.

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject(new Error('Input must be an array'));
      return;
    }

    const words = mixedArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());

    resolve(words);
  });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

module.exports = lowerCaseWords;
