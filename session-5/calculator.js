const add = (num1, num2) => {
    return num1 + num2;
};

// arrange
let num1 = 9;
let num2 = 14;
let expectedSum = 23;
//act
let result = add(num1, num2);
//assert
if (result === expectedSum) {
    console.log('Test passed:' + result);
} else {
    console.log(`Test failed. Expected ${expectedSum}, but got ${result}.`);

}