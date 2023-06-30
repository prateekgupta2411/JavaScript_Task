//task 1(c)
// Ques -> Explain find, findIndex and filter. Explain their syntax and return values also
// Ans -> Find -it is used to find the first element that satisfies a condition and returns.
// Syntex
// array.find(function(currentValue, index, array) {
// });
// Example
const arr = [2, 4, 6, 8, 10,12];
const found = arr.find(function(element) {
    return element > 9;
});
console.log(found);

//Ans -> FindIndex -it is used to find the index of the first matching element.
// Syntex 
// array.findIndex(function(currentValue, index, array) {
// });
// Example 
const arr1 = [2, 4, 6, 8, 10,12];
const foundIndex = arr1.findIndex(function(element) {
    return element > 9;
});
console.log(foundIndex); 

// Ans -> Filter -it is used to create a new array with elements that pass a given condition.
// Syntex
// array.filter(function(currentValue, index, array) {
// });
const arr2 = [2, 4, 6, 8, 10, 12];
const filteredArray = arr2.filter(function(element) {
    return element > 9;
});
console.log(filteredArray);





