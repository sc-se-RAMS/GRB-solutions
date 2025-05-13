/* Write a calculator function that takes a string of numbers and performs addition with the rules:​

The function should accept 0, 1, or 2 numbers; an empty string should return an empty string.​

It should handle an unknown number of numbers but ignore numbers larger than 1000.​

Throw an exception for any negative numbers.​

Be prepared to discuss your code on return​*/

const stringCalculator = (stringOfNumbers) => {
    if (stringOfNumbers==="") return "";
    // if (stringOfNumbers > 1000) return "";
    // if (stringOfNumbers < 0) return "";

    let numbers=stringOfNumbers.split(",").map(Number);
    let sum = 0;

    for(let i=0; i< numbers.length; i++){
        let number = numbers[i];

        if (stringOfNumbers < 0){ 
            return ""; }
            else if (number < 1000){
                sum += number;
            }
    }
    return sum;


}

console.log(stringCalculator("1,2"));