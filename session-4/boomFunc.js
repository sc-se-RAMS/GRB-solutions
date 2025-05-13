/* Create a function that takes an array of numbers and returns the word ‘Boom!’ if the number 7 appears in the array. Otherwise return ‘No booming here’.​

Examples:​

sevenBoom([1, 2, 3, 5, 7]) => ‘Boom!’​

sevenBoom([1, 2, 3, 5, 9]) => ‘No booming here’​

sevenBoom([1, 2, 3, 5, 97]) => ‘Boom!’​ */


//numbersArray is the parameter
const boom = (numbersArray) => {

    //convert array to string to recognise 7 as a digit in any given number
    //saw solution but easier for me to understand by creating variable then using toString method on new var
    // const testNumbers = numbersArray.includes(7);
    // const testSeven = testNumbers.toString();
    
    //const testSeven converts the array to a string to be checked for any '7' within the input of numbersArray
    //we need this value to carry out the necessary check
    //as you can't just use numbersArray by itself - error otherwise
    const testSeven = (numbersArray) => numbersArray.toString().includes("7");
    //The some() method checks if any array elements pass a test (provided as a callback function)
    const checkForSeven = numbersArray.some(testSeven);


    //if containsSeven is true 
if (checkForSeven){
    console.log("BOOM!");
} else {
    console.log("No booming here!");
}
}

//example arguments to the function Boom()
numbersToCheck = [1, 2, 3, 5, 7];
boom(numbersToCheck);

numbersToCheck = [1, 2, 3, 5, 9];
boom(numbersToCheck);

numbersToCheck = [1, 2, 3, 5, 97];
boom(numbersToCheck);



