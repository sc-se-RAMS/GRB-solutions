/*Iterate from numbers 1 to 500 inclusive and sum up the numbers that are divisible by ONLY 3 or 5.​

Also print these numbers as well as the total at the end.​ */
let sum = 0;
for(i=0; i <=500; i++){
    
    if(i % 3 == 0 || i % 5 == 0){
        console.log("Divisible by 3 or 5")
    } else {
        console.log(i);
    }
    sum += i;

}

console.log(sum);

