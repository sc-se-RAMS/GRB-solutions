/* Create a program that allows you to play rock, paper scissors. Print the outcome to the console window as well as displaying the user choice and computer choice 
Tip: Math.random() returns a value between 0 and 1 so this can be used to choose the computer's choice*/


//define number of players
let player1 = "Rameen";
let player2 = "Computer";

//current score for each player
let currentScore1 = 0;
let currentScore2 = 0;

//fcn for randomly selecting computers choice 
const getComputersChoice = () => {
const computersChoice = ["rock", "paper", "scissors"];
const randomCompChoice = Math.floor(Math.random() * computersChoice.length);
return computersChoice[randomCompChoice];
};

//player input for choice
let yourChoice = "scissors";
console.log(`Your choice is: ${yourChoice}`);

//computer random choice
let computerChoice = getComputersChoice();
console.log(`The computer's choice is: ${computerChoice}`);

//fcn for playing game 
let game = () => {
    
    if(yourChoice === computerChoice){
        return "It's a draw!"
    } 
    if(yourChoice === "rock" && computerChoice === "scissors" ||
        yourChoice === "paper" && computerChoice === "rock" ||
        yourChoice === "scissors" && computerChoice === "paper" ){
            currentScore1++;
            return `${player1} wins this round!`;
        } else {
            currentScore2++;
            return `${player2} wins this round!`;
        }
}
console.log(game());

/*
occurences for points:

if both choose the same then no points
if rock vs scissors = rock wins 
if rock vs paper = rock wins 
if paper vs scissors = scissors wins 

overall score tally:

if score for player 1 == computer THEN 
console.log("It's a draw");

if score player 1 > computer THEN
console.log("player 1 wins!");

if score computer > player 1 THEN 
console.log("computer wins!");

*/



// function for tracking points 
let points = () => {
    let player1Points = 0;
    let player2Points = 0;
    let rounds = 0;

    while(rounds < 5 && currentScore1 < 4 && currentScore2 < 4){
        
        console.log(`Score -> ${player1}: ${currentScore1}, ${player2}: ${currentScore2}`);
        rounds++;
        console.log(rounds);
    }
}

points();
