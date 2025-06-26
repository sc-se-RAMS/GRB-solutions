/*A child is playing with a ball on the nth floor of a tall building. ​
The height h of this floor is known. He drops the ball out of the window. The ball bounces to two thirds of it's height, i.e. 0.66. His mother looks on from a window that is 1.5m from the ground.
How many times will the mother see the ball pass her window (including the time the ball falls and whilst its bouncing)?​

Assume you have the following arguments to your function:​

h is a float that is greater than 0 ​

bounce is a float that is greater than 0 and less than 1 ​

window must be less than h​

If all of the above argument criterias are matched, return the outcome of occurrences, as an integer, otherwise return -1​ ​*/

//floorLevel = n
//floorHeight = h
//windowHeight = 1.5m
//for the mother to see the ball, the height must be more than 1.5
//each pass from window +1 to numberOfBounces

//if(windowHeight<height; height>0; bounce >0 && bounce <1)

//create func for counting bounces
// let numberofBounces = (h, bounce, window) =>{
//     // Declare variables (h, bounce, occurrences, window) ​
//     let h = null;
//     let bounce = 0;
//     const window = 1.5;


// Set h​

// Logic for ball bouncing and mother seeing the ball:​
// let occurences = 1; 
// balls new height after bounce
// let h = h * bounce;
//  while h > window​
//     while(h>window){
//         // Add one to occurrences​
//         bounce += 1;
//     }
// // H * 0.66​
// // If h > window​
// // Add one to occurrences​
// // Else Print “number of bounces is $occurrences”​
// }


const isValidBounceInput = (h, bounce, window) => {
    return h > 0 && bounce > 0 && bounce < 1 && window < h;
};

const calculateBouncesSeen = (h, bounce, window) => {
    let count = 1; // First fall is always seen
    h *= bounce;

    while (h > window) {
      count += 2; // Seen going up and coming back down
      h *= bounce;
    }

    return count;
};
const countBounces = (h, bounce, window) => {
    if (!isValidBounceInput(h, bounce, window)) {
        return -1;
    }
    return calculateBouncesSeen(h, bounce, window);
};


// Example test cases
console.log(countBounces(3.0, 0.66, 1.5)); // Output: 3
console.log(countBounces(30, 0.66, 1.5)); // Output: 15
console.log(countBounces(3.0, 1.0, 1.5)); // Output: -1 (invalid bounce)
console.log(countBounces(-5, 0.66, 1.5)); // Output: -1 (invalid height)
console.log(countBounces(3.0, 0.66, 3.5)); // Output: -1 (window too high)

