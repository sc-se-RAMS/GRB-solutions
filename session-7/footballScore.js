/*Write a program that calculates the number of points obtained by a football team over a given season​

A score is denoted by “X:Y” where X is the home score and Y is the away score. Assume we played our games at home all season.​

Input: an array of 38 strings.​

All score combinations should be covered.​

​*/

// import { parse } from "path";

/* 

//create function that calulates total points 
const tallyTotalScore = (matches) =>{

let homeScore = 
let awayScore = 
let totalPoints = 

for loop to go through the matches
for (let i=0; i<matches.length; i++){
//matches where each team can only score max 3 goals
const matches = e.g. ["1:3"];

if (homeScore > awayScore){
add 3 points to totalPoints
return("3 points scored")
}
else if (homeScore == awayScore){
add 1 point to totalPoints (only adding to home score as this is the info we are focusing on)}
else (homeScore < awayScore){
do nothing to totalPoints}
};

return totalPoints;
}
*/
const tallyTotalScore = (matches) =>{

const matchResult = [
    "2:1", "3:0", "1:1", "0:2", "2:2", "1:0", "0:1", "3:3", "2:0", "0:3",
    "1:2", "3:1", "1:3", "0:0", "2:1", "1:1", "3:2", "0:0", "2:3",
    "1:2", "0:3", "2:2", "3:1", "1:1", "3:0", "2:1", "0:0", "1:3", "2:0",
    "3:3", "1:0", "0:1", "2:2", "1:2", "0:0", "1:1", "3:2", "0:2"];

// let homeScore = [];
// let awayScore = [];
let totalPoints = 0;

for (let i=0; i<matchResult.length; i++){

    let scores = matchResult[i].split(":");
    let homeScore=parseInt(scores[0]);
    let awayScore=parseInt(scores[1]);

    // console.log(homeScore);
    if(homeScore > awayScore){
        totalPoints += 3;
        // console.log("the total points scored is:" + totalPoints);
    } else if(homeScore === awayScore){
        totalPoints += 1;
    } else if(homeScore < awayScore){
        console.log("No change in total points")
    }

};
console.log(`The total points the home team have: + ${totalPoints}`);

}

tallyTotalScore();

//when the totalPoints are finally logged, if printed inside the for loop, each iteration is logged, if outside the loop only final iteration is printed: why?

//possible issues found
/*wasnt calling function at the end
had duplicated homescore and awayscore varaibles unecessarily
wasnt totaling up the scores properly, could use operator += instead of totalPoints + 3; */