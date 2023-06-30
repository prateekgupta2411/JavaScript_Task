// task 1(f)
// sort() -> The sort() function is used to sort the elements of an array.
// syntax
//array.sort(compareFunction);
const numbers = [5, 2, 10, 1, 8, 12];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
