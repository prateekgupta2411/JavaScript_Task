// Task 1
//(i)
const arr1 = [5, 18, 26, 30];
const arr2 = [101, 102];
const newarr = [];
const maxLength = (arr1.length >= arr2.length) ? arr1.length : arr2.length;

for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
    newarr.push(arr1[i]);
    }
    if (i < arr2.length) {
    newarr.push(arr2[i]);
    }
}
console.log(newarr);

//(ii)

