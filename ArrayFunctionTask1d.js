// task 1(d)
//the find() method return undefined. if no element in the array matches the specified condition.
// Example Find()
const arr3 = [2, 4, 6, 8, 10, 12];
const found = arr3.find(function(element) {
    return element > 20;
});
console.log(found); 
// findIndex -> the findIndex() method returns -1.if no element in the array matches the specified condition
// Example findIndex()

const arr4 = [2, 4, 6, 8, 10, 12];
const foundIndex = arr4.findIndex(function(element) {
    return element > 20;
});
console.log(foundIndex); 