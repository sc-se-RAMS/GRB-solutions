/* Given you have a begin, end and step set of arguments. ​

write a function that takes these non-negative numbers and returns the sum of integers from begin to end that increase by the number of step.​

If begin is greater than end, the function should return 0. */

//begin: start from this no.
//end: max no.
//step: increase by this no. each time

const sumOfSequence = (begin, end, step) => {
    if(begin > end) return 0;
    

    let sum = 0;
    
    for(let i = begin;i <= end; i += step){
        sum += i;
    }
    return sum;
}

console.log(sumOfSequence(7, 6, 2));//expected result 0 as begin>end
console.log(sumOfSequence(3, 6, 2));//expected result 8 as 3+5