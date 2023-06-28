const arr = [100, 200, 10, 20, 50, 64];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('Max =', max);
