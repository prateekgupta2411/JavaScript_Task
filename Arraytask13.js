const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
    count++;
    }
}
console.log('Count =', count);
