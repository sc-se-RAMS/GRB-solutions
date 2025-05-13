//sync
/*
function otherFunction() {

    console.log("Task 2");
 
    console.log("Task 2");
 
    console.log("Task 2");
 
    }
 
 
 
 console.log('Task 1');
 
 otherFunction();
 
 console.log('Task 3'); */

//async /*
// console.log('Task 1');

// setTimeout(() => console.log('Task 2 (Async)'), 1000);

// console.log('Task 3'); 
/*

console.log("Start");

const loginUser = (username, password) => {

// simulate a server checking the details​

setTimeout(() => {

console.log('Now we have the data username!');

return { account: username };

}, 3000);

};

const loggedInUser = loginUser("johndoe@foo.com", 12324);

console.log("loggedInUser", loggedInUser);

console.log("Finish");
 */
/*
console.log("Start");

const loginUser = (username, password, callback) => {

// simulate a server checking the details​

setTimeout(() => {

console.log('Now we have the data username!');

callback({ account: username });

}, 3000);

};

const loggedInUser = loginUser("johndoe@foo.com", 12324, (userDataReceived) => {

console.log("userDataReceived", userDataReceived);

});

console.log("Finish");
*/

/*
console.log("Start");



const loginUser = (username, password, callback) => { //another callback​

// simulate a server checking the username and password using setTimeout:​
setTimeout(() => {

console.log('Now we have the data username!');

callback({ account: username });

}, 3000);

};



const retrieveUserLikedProgrammes = (username, callback) => { //another callback​

// simulating the retrieval of liked programmes using setTimeout:​

setTimeout(() => {

callback(["Breaking Bad", "24", "Friends"]);

}, 1000);

};



const retrieveProgrammeDetail = (programmeName, callback) => { //another callback​

// simulating the retrieval of programme details using setTimeout:​

setTimeout(() => {

callback({

duration: "180m",

supportedLanguages: ["en", "fr"]

})

}, 2000);

}



const loggedInUser = loginUser("johndoe@foo.com", 12324, (userDataReceived) => {

console.log("userDataReceived", userDataReceived);



retrieveUserLikedProgrammes(userDataReceived.account, (likedProgrammes) => {

console.log("likedProgrammes", likedProgrammes);



retrieveProgrammeDetail(likedProgrammes[0], (details) => {

console.log("Details for programme", details);

})

})

});


console.log("Finish");

*/
/*
console.log("Start");

const loginUser = (username, password) => {

   return new Promise((resolve, reject) => {

       // simulate a server checking the username and password using setTimeout:​

       setTimeout(() => {

           console.log("Now we have the data username!");

           resolve({ account: username });
       }, 3000);

   });

};


const retrieveUserLikedProgrammes = (username) => {

   return new Promise((resolve, reject) => {

       // simulating the retrieval of liked programmes using setTimeout:​

       setTimeout(() => {

           resolve(["Breaking Bad", "24", "Friends"]);

       }, 1000);

   });

};



const retrieveProgrammeDetail = (programmeName) => {

   return new Promise((resolve, reject) => {

       // simulating the retrieval of programme details using setTimeout:​

       setTimeout(() => {

           resolve({

           duration: "180m",

           supportedLanguages: ["en", "fr"],

       });

       }, 2000);

   });

};



// now let's perform our steps:​

loginUser("johndoe@foo.com", 12324)

.then(userDataReceived => retrieveUserLikedProgrammes(userDataReceived.account))

.then(likedProgrammes => retrieveProgrammeDetail(likedProgrammes[0]))

.then(details => console.log("Details for programme", details));



console.log("Finish");
*/

/*
// Creating a Promise​

const myPromise = new Promise((resolve, reject) => {

    const success = true; // Change this to false to see the reject case​
 
 
 
    if (success) {
 
        resolve("The operation was successful!"); // Resolves the promise​
 
    } else {
 
        reject("The operation failed."); // Rejects the promise​
 
    }
 
 });
 
 
 
 // Using async/await with try/catch​
 
 async function handlePromise() {
 
    try {
 
        const message = await myPromise; // Await the result of the Promise​
 
        console.log(message); // Logs "The operation was successful!" if resolved​
 
    } catch (error) {
 
        console.error(error); // Logs "The operation failed." if rejected​
 
    }
 
 }
 
 
 
 // Call the async function​
 
 handlePromise(); */