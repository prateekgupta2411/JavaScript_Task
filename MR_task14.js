const numbersArray = [2, 4, 6, 8, 10, 12];

//sum of the numbers
const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

//product of the numbers
const product = numbersArray.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product);

//maximum number
const maxNumber = numbersArray.reduce((max, curr) => (curr > max ? curr : max), -Infinity);
console.log("Max number:", maxNumber);

//minimum number
const minNumber = numbersArray.reduce((min, curr) => (curr < min ? curr : min), Infinity);
console.log("Min number:", minNumber);

// e) Count the numbers greater than 10
const countGreaterThan10 = numbersArray.reduce((count, curr) => (curr > 10 ? count + 1 : count), 0);
console.log("Count of numbers greater than 10:", countGreaterThan10);
