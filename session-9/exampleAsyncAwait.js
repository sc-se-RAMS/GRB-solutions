function doSomething(time, label) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (label === "Second task") {
          return reject("Something went wrong in the second task");
        }
        console.log(`${label} done`);
        resolve();
      }, time);
    });
  }
  
  async function runTasks() {
    try {
      await doSomething(1000, "First task");
      await doSomething(1000, "Second task"); // This will throw
      await doSomething(1000, "Third task");
    } catch (error) {
      console.error("Caught error:", error);
    }
  }
  
  runTasks();

//  async makes the function able to use await, which pauses the function until a promise resolves.

//   It looks like normal step-by-step code, but it's still async.

//   💡 try...catch:
//   Used to catch errors if any awaited promise fails.

//   In our example, "Second task" fails on purpose to demonstrate error handling.