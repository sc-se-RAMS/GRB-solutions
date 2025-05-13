/* Write a function that converts numbers to their roman numeral equivalent. For example:​

1 gives letter 'I'​

10 gives letter 'X'​

7 gives VII​

Use this link to help you: wikipedia.org/wiki/Roman_numerals​

Your function can be: ​
const toRoman = (number) => { ... };​



​*/

/* PSEUDOCODE

const toRoman = (number)=> {
    numericInput = 
    romanNumeralOutput = 
    for(let i=0; i<=100; i++){
    if (numericInput.contains[1])}}
*/

const toRoman = (number) => { 
    let romanValues = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for(let i=0; i< romanValues.length; i++){
        while(number >= romanValues[i].value){
            result += romanValues[i].numeral;
            number -= romanValues[i].value;
        }
    }
    return result;
}

console.log(toRoman(5)); //returns V 
console.log(toRoman(27)); //returns XXVII