const arr = [10, 20, 50, 64];
const numberToInsert = 99;
let insertIndex = 0;
while (insertIndex < arr.length && arr[insertIndex] < numberToInsert) {
    insertIndex++;
}
arr.splice(insertIndex, 0, numberToInsert);

console.log(arr);
