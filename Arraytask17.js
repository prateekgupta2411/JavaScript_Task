const arr = [20,14,2,7,18];
const evenArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    evenArray.push(arr[i]);
    }
}
console.log(evenArray);
