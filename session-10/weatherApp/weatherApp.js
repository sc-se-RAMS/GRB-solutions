/* 

Create an application using HTML and JavaScript that requires a location then calls a Weather API to render the forecast​

Display the forecast to the user. Cater for an error when a user types a place that doesn’t exist​

Add CSS to make the application more appealing and accessible for the user


//All DOM elements

//retrieve weather information for location

function to call api 

function for output?*/

//promise that is for waiting for users locationInput
function locationInput() {
    // let location = 
    return new Promise((resolve, reject) => {
    const location = document.getElementById('locationInput').value.trim();

      setTimeout(() => {
        if (location === "") {
            reject("Please enter a location");
          } else {
        // console.log(`User entered location of ${location}`);
        resolve(location);
          }
      }, 500);
    });
  }

// Async function to retrieve weather information

  const retrieveWeatherInformation = async (location) => {
    const apiKey = '3935132cd748d97f82e7ea2ee0b91c85'
    const weatherInfoURL = `http://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(weatherInfoURL);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        } else {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            echoBlock.textContent = `The weather in ${location} is ${weather} with a temperature of ${temp} °C`;
        }
          // console.log('Rates against GBP are: ', JSON.stringify(data, null, 2));
    } catch (err) {
      echoBlock.textContent = `Error fetching weather information: ${err.message}. Please enter a valid location e.g. London`;
  }
};

//All DOM elements
const btn = document.querySelector('button');
const input = document.querySelector('input');
const echoBlock = document.getElementById('echo');

// const echoOutput = (event) => {
    
//     if (input.value === '') {
//         alert('Please enter a location');
//     }
//     else {
//         echoBlock.textContent = input.value;
//     }
// }

// btn.addEventListener('click', echoOutput);

btn.addEventListener('click', async () => {
try {
    // Get user input 
    const location = await locationInput();
    // Fetch and display the weather for the location
    await retrieveWeatherInformation(location);
} catch (err) {
    // Handle error
    alert(err);
}
});