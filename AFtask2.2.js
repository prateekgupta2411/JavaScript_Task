const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// a) Filter numbers equal to 10
const equalTo10 = numbers.filter((number) => number === 10);
console.log("Numbers equal to 10:", equalTo10);

// b) Filter numbers greater than 30
const greaterThan30 = numbers.filter((number) => number > 30);
console.log("Numbers greater than 30:", greaterThan30);

// c) Filter numbers that are multiples of 3
const multiplesOf3 = numbers.filter((number) => number % 3 === 0);
console.log("Multiples of 3:", multiplesOf3);

