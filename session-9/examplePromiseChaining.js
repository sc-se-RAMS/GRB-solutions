function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("First promise resolved");
        resolve();
      }, 1000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second promise resolved");
        resolve();
      }, 1000);
    });
  }
  
  function thirdPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Third promise resolved");
        resolve();
      }, 1000);
    });
  }
  
  // Chaining
  firstPromise()
    .then(() => secondPromise())
    .then(() => thirdPromise());

// Promise represents something that will be done later.

// It either resolves (success) or rejects (failure).

// Each .then() waits for the previous promise to resolve.

// More readable than nested callbacks.

// If any promise fails (is rejected), and there’s no .catch(), the error will be unhandled.