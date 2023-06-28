const arr = [5, 18, 26, 30, 40, 6];
let maxNumber = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
    maxNumber = arr[i];
    maxIndex = i;
    }
}
arr.splice(maxIndex, 1);
console.log(arr);
