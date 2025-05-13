// import { temperatureConverter } from './temperatureConverter.js'; // no .js  extension with Node​
const { temperatureConverter } = require('./temperatureConverter');

test('When given a temperature, the converted value returned are', () => {
    // Arrange:
    const temperature = -25;
    const value = "F";

  // Act:​
    const result = temperatureConverter(temperature, value);

   // Assert:​
    expect(result).toEqual({temperature:-25, value: "F"}); // 'toBe' is an assertion function​

});