/*

console.log("Good Morning!");

//creating a variable using the var keyword:
var myName = 8;
var goalsPerGame = 10;

var myName = 'Rameen';

console.log(myName);


//creating a variable using the let keyword:
let firstName = 'Bob';
console.log(firstName);
let interestRate = 1.4;
firstName = 'John';
console.log(firstName)

let age = 39;
age = 31; //this will throw an error in the console
console.log(age);


//using backticks
let text = `This is some text using back ticks`
console.log(text);

//template literal
let firstName = 'John';
let age = 12;

let message = `${firstName} is ${age} years old`;
console.log(message);

let browser = 'Chrome';
console.log(browser.substring(0, 2)); // this will yield 'Ch'
console.log(browser.substring(2)); // this will yield 'rome'

let message = 'string'
console.log(message.substring(2,4));

let message1 = 'code'
console.log(message1.substring(1,3));

let message2 = 'practice'
console.log(message2.substring(3,5));

const phrase = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(phrase.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(phrase.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
 
console.log(words); // this will show you the Array contents
console.log(words[3]); // expected output: "fox"
 
const chars = str.split('');
console.log(chars[8]); // expected output: "k"
*/

//numbers
let numberOfItems = '10';
let numberOfItemsAsNumber = parseInt(numberOfItems);
console.log('Items as a number variable', numberOfItemsAsNumber);

let radius = 4.5;
let circumference = parseFloat(radius) * 2.0 * Math.PI;
console.log('circumference as a float', circumference);

//bool
const APPLY_SALARY_INCREASE = true;

console.log(APPLY_SALARY_INCREASE);

let isRainingToday = true;

console.log(isRainingToday);

let hasReachedLimit = false;

console.log(hasReachedLimit);

/*Boolean​

AKA​

true​

correct, yes, Y, y, 1​

false​

incorrect, no, N, n, 0​ */

let response = null

//null vs undefined 

let numberOfStudents;

console.log(numberOfStudents);
//or you can explicitly initialise a variable as undefined 

//objects
const name = 'John';

const age = 25;

// on their own they have no relation to one another, however we can create a person object:​

const person = {

name: 'John',

age: 25

};

console.log(person);


const person1 = {

    name: 'John',

    age: 25

};

 // we use the dot notation to extract each property:​

console.log(person1.name);
console.log(person1.age);

 // let's check the types of the person and properties:​

console.log(typeof person1);

console.log(typeof person1.name);

//date is in object family
const now = new Date();
console.log(now);


//arrays
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits);

const mixedArray = ['efe', 12, 3.14, true];
console.log(mixedArray);