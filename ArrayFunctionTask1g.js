// task 1(g)

//The sort() function sorts the array in place, meaning it modifies the original array. 
//It does not create a new array.

const originalarr = [3, 1, 5, 2, 4];
const sortarr = originalarr.slice().sort();

console.log(sortarr);
console.log(originalarr); 
