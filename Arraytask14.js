const arr = [12, 13, 14, 15, 16, 17];
let isSequence = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
    isSequence = false;
    break;
    }
}
if (isSequence) {
    console.log('SEQUENCE');
} else {
    console.log('NOT');
}
