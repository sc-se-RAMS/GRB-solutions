//Activity 1: Weekly routine​

/*Given that a day is represented by a number and Monday is represented as the number 1. ​

Print out when the day is a weekday. ​

On a Tuesday I go to the gym. Display this. ​

On a Thursday I go to the gym. Display this. ​

On a Sunday I do gardening. Display this. ​
*/

let dayOfTheWeek = 6;

if (dayOfTheWeek === 2){
  console.log("It's time to go to the gym!");
} else if (dayOfTheWeek === 4){
  console.log("On a Thursday I go to the gym");
} else if (dayOfTheWeek === 7){
  console.log("It's time to do some gardening");
} else if (dayOfTheWeek <=5){
  console.log("It's a weekday");
} else {
  console.log("It's a saturday!");
}

