// Function to sort numbers in ascending order
function sortNumbersAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
// Function to sort numbers in descending order
function sortNumbersDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
// Function to sort numbers based on their absolute value in ascending order
function sortNumbersByAbsoluteValue(numbers) {
    return numbers.slice().sort((a, b) => Math.abs(a) - Math.abs(b));
}
// Test cases
const numbers = [12, 5, -6, 10, -9, 4, 0, -23, 34];

const ascendingOrder = sortNumbersAscending(numbers);
console.log("Ascending Order:", ascendingOrder);

const descendingOrder = sortNumbersDescending(numbers);
console.log("Descending Order:", descendingOrder);

const absoluteValueOrder = sortNumbersByAbsoluteValue(numbers);
console.log("Absolute Value Order:", absoluteValueOrder);
