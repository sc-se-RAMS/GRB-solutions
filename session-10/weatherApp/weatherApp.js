/* 

Create an application using HTML and JavaScript that requires a location then calls a Weather API to render the forecast​

Display the forecast to the user. Cater for an error when a user types a place that doesn’t exist​

Add CSS to make the application more appealing and accessible for the user

PSEUDOCODE


// Async function to retrieve weather information

//All DOM elements

//retrieve weather information for location

function to call api 

function for output?*/

//promise that is for waiting for users locationInput
function locationInput() {
    // let currency = 
    return new Promise((resolve, reject) => {
    const location = document.getElementById('locationInput').value.trim().toUpperCase();

      setTimeout(() => {
        if (location === "") {
            reject("Please enter a currency");
          } else {
        // console.log(`User entered location of ${location}`);
        resolve(location);
          }
      }, 1000);
    });
  }
