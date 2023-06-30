// task 1(e)
//spread operator -> The spread operator (...) is a syntax in JavaScript that allows for the expansion.
// need -> Array Manipulation, Array Copy,Function Arguments, etc
// Example
// Array manupulate
const numbers = [1, 2, 3];
const newarr = [...numbers, 4, 5, 6];
console.log(newarr);

// Array Copy
const numbers1 = [1, 2, 3];
const copyArray = [...numbers1];
console.log(copyArray);

//Function Argument
function addNumbers(a, b, c) {
    return a + b + c;
}
const numbers2 = [1, 2, 3];
const sum = addNumbers(...numbers2);
console.log(sum);
