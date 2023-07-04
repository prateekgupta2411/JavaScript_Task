// task 13(a)
const array1 = ["JavaScript","Hello","React","Java","Python","C","Node"];
array1.sort();
console.log(array1);

// task 13(b)
const array2 = ["JavaScript","Hello","React","Java","Python","C","Node"];
array2.sort((a, b) => b.localeCompare(a));
console.log(array2);

// task13(c)
const array3 = ["JavaScript","Hello","React","Java","Python","C","Node"];
array3.sort((a, b) => a.length - b.length);
console.log(array3);

//task13(d)
const array4 = ["JavaScript","Hello","React","Java","Python","C","Node"];
array4.sort((a, b) => (a.split('a').length - 1) - (b.split('a').length - 1));
console.log(array4);
