// Question 2: Promises
// Promise-based versions of delayedSuccess and delayedException from callbacks.js

const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'delayed success!' });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: 'delayed exception!' });
    }, 500);
  });
};

// Call both promises separately and handle the results
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
