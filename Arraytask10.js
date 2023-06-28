const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 19];
let sum1 = 0;
for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}
let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
}
if (sum1 > sum2) {
    console.log('Big1');
} else if (sum2 > sum1) {
    console.log('Big2');
} else {
    console.log('Equal');
}
