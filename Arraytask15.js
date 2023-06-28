const arr = [4, 5, 6, 7, 8, 9, 10];
let isAlternating = true;

for (let i = 0; i < arr.length; i++) {
    if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
    isAlternating = false;
    break;
    }
}

if (isAlternating) {
    console.log('ALTERNATING');
} else {
    console.log('NOT');
}
