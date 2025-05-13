// const divide = (a, b) => a / b;

// console.log(divide(10, 5)); // we get 2​

// console.log(divide(10, 0)); // oh no!

// const divide = (a, b) => {

//     if (b === 0) {
//         throw new Error('Unable to divide by zero');

//     }

//     return a / b;

// };



// console.log(divide(10, 0)); // Unable to divide by zero

const divide = (a, b) => {

    if (b === 0) {

        throw new Error('Unable to divide by zero');

    }

    return a / b;

};



try {

    const result = divide(10, 0);

} catch (e) {

    // handle error here:​

    console.error(e);

    alert(`Sorry you cannot divide by zero, try again`);

}