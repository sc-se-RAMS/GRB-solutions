import { convertMoneyToCoins } from './amountAsCoins.js'; // no .js  extension with Node​
test('When given an amount of money, the coins returned are', () => {
    // Arrange:
    const money = 46;
    const coins = [25, 10 , 5, 2, 1];

  // Act:​
    const result = convertMoneyToCoins(money, coins);

   // Assert:​
    expect(result).toEqual([25, 10, 10, 1]); // 'toBe' is an assertion function​

});