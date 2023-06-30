function findNumberAndIndex(array, condition) {
  const foundNumber = array.find(condition);
  if (foundNumber !== undefined) {
    const index = array.findIndex(condition);
    return { number: foundNumber, index: index };
  }
  return null;
}

// Test case 1: Find number and index equal to 10
const numbers = [5, 10, 15, 20];
const result1 = findNumberAndIndex(numbers, (num) => num === 10);
console.log(result1);

// Test case 2: Find number and index greater than 30
const numbers2 = [25, 40, 12, 50];
const result2 = findNumberAndIndex(numbers2, (num) => num > 30);
console.log(result2);

// Test case 3: Find number and index multiple of 3
const numbers3 = [7, 11, 15, 18];
const result3 = findNumberAndIndex(numbers3, (num) => num % 3 === 0);
console.log(result3);
