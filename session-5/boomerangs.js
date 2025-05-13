/* A boomerang can be defined as a sub-array of length 3, with the same first and last digits and a different middle digit. ​

[3, 7, 3], [1, -1, 1], [2, 9, 2] are all boomerangs​

[1, 3, 1], [5, 5, 5] are NOT boomerangs

Create a function that returns the total number of boomerangs in an array of numbers​
Example:[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]​

// 3 boomerangs in this sequence: [3, 7, 3], [1, 5, 1] and [2, -2, 2]​

Caution boomerangs ​can overlap: 
[1, 7, 1, 7, 1, 7, 1]​
// 5 boomerangs: [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7, [1, 7, 1]​

PSEUDOCODE 

create variables for main array and small array

let boomerangArray = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]​;
let subArray = [];

function checkforboomerang (boomerangArray = [example boomerang]){
smallerBoomerang Array = split BoomerangArray into 3 
if (splitboomerangArray contains same number in positions 0 and 2){
then console.log(`there are ${numberOfBoomerangs} in this sequence);
}else if(check for overlap in boomerangArray){
console.log(`there are ${numberOfBoomerangs} in this sequence);
}
}
}
*/

const checkForBoomerangs = (boomerangArray) => {
    
    let start = 0;

    for(let i=0; i<boomerangArray.length -2; i++){
        const [a,b,c]= [boomerangArray[i], boomerangArray[i + 1], boomerangArray[i +2]];
        if(a === c && a !== b){
            start++;
        } else if (start === 0){
            console.log("There are no boomerangs in this array");
        } 
    }
    return start;


}
let boomerangArray = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];

console.log(checkForBoomerangs(boomerangArray)); //returns total no. of boomerangs
