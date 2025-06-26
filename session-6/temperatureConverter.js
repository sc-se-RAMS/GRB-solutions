/* When given:​

Fahrenheit, a value should be converted to Celsius​

Celsius, a value should be converted to Fahrenheit​

Tip:​

To obtain temperature in Celsius: (F - 32) / 9 x 5​

To obtain temperature in Fahrenheit: (C * 1.8) + 32​

Write several tests to ensure the above calculations provide the correct result.​

You may use an online converter to check for expected results. */

/* 
PSEUDOCODE
func for converting temperature 
let celcius = conv for farheniet
let farenheit = conv for celcius

use math.floor to round number down */


function temperatureConverter(temperature, value){
    if (value === "C"){
        let Fahrenheit = Math.floor((temperature * 1.8) + 32);
        console.log(`The temperature in farenheit is ${Fahrenheit}°F`);
        return {
            temperature: Fahrenheit,
            value: "F"
        };

    } else if (value === "F"){
    let Celsius = Math.floor((temperature - 32) / 9 * 5);
    console.log(`The temperature in celsius is ${Celsius}°C`);
    return {
        temperature: Celsius,
        value: "C"
    };

    } else {
        console.log("Please enter a value specifying degrees Celsius (°C) or degrees Farenheit(°F)");
        return null;
    }
}

module.exports = { temperatureConverter };

// temperatureConverter(100,"C"); //212 F
// temperatureConverter(-25, "F"); //-32 (rounded up)
// temperatureConverter(100,""); //Please enter a value specifying degrees Celsius (°C) or degrees Farenheit(°F)"

// arrange
let temperature = 100;
let value = "C"
let expectedTemperature = {temperature: 212, value: "F"};
//act
let result = temperatureConverter(temperature, value);
//assert
if (JSON.stringify(result) === JSON.stringify(expectedTemperature)) {
    console.log('Test passed:' + JSON.stringify(result));
} else {
    console.log(`Test failed. Expected ${JSON.stringify(expectedTemperature)}, but got ${JSON.stringify(result)}.`);
}

