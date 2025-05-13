//Write a program that produces the Fibonacci sequence: ​
//fibonacci is sum of previous 2 numbers starting like 0, 1, 1, 2, 3, 5, 8, 13, 21, ...​
//within for loop
//to set limit on numbers produced 


// for(setup,comparison, change)
// let number1 = 0;
// let number2 = 1;

// let limit = 10;

// let result = number1 + number2;
// for(let i=0; i<limit; i++){
    
//     console.log(result);
//     result++
// }

/*vfor each Number
add prev 2 numbers 
number needs to be greater or equal to 0

let currentNumber = 0
let newNumber = 1 */

/*
Write a program that produces the
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 
From 0 to 100.
*/
 
//starting point
let i = 0;
let fib = [0, 1];
 
for (i = 2; i <= 50; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
 
  if (fib[i] > 100) {
    break;
  }
 
  console.log(fib[i]);
}