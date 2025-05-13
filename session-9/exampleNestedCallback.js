function firstCallback(callback) {
    setTimeout(() => {
      console.log("First callback done");
      callback();
    }, 1000);
  }
  
  function secondCallback(callback) {
    setTimeout(() => {
      console.log("Second callback done");
      callback();
    }, 1000);
  }
  
  function thirdCallback() {
    setTimeout(() => {
      console.log("Third callback done");
    }, 1000);
  }
  
  // Nested callbacks
  firstCallback(() => {
    secondCallback(() => {
      thirdCallback();
    });
  });
  
//   Functions are nested inside each other.

//   Each one waits for the previous one to finish.
  
//   This structure is often called "callback hell" or "pyramid of doom" because it gets hard to read as you add more levels.