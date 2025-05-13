import { add } from './calculator.js'; // no .js  extension with Node​


test('When given two numbers, their sum is returned', () => {
    // Arrange:
    const num1 = 1;
    const num2 = 1;

  // Act:​
    const result = add(num1, num2);

   // Assert:​
    expect(result).toBe(2); // the 'toBe' is an assertion function​

});