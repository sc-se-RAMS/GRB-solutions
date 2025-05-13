//Given a string and non-negative number, return a larger string that is N copies of the original string.​//

let text = "hello";
let times = 3;

let result = "";
for(let i=0; i<times; i++){
    result = result + text;
    console.log(result);
}