/*Given you have available coins as 25, 10, 5, 2 and 1,
write a program to work convert an amount of money to coins.
You are expected to write unit tests
For example: If the amount is 46​
Output: 25, 10, 10, 1​*/

export const convertMoneyToCoins = (money, coins=[25, 10 , 5, 2, 1]) =>{
    let result = [];

    for(let i = 0;i < coins.length; i++){
        let coin = coins[i];
        while(money >= coin){
            result.push(coin);
            money -= coin;
        }
    }
    return result;
};

console.log(convertMoneyToCoins(10)); //(1) [10]
console.log(convertMoneyToCoins(46)); //(4) [25, 10, 10, 1]