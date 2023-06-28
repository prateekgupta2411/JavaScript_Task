const arr = [5, 18, 26, 30, 40, 6, 3];
const evenArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
    evenArray.push(arr[i]);
    }
}

console.log(evenArray);
