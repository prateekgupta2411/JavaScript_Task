const arr = [14, 14, 14, 14];
let allSame = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
    allSame = false;
    break;
    }
}
if (allSame) {
    console.log('ALLSAME');
} else {
    console.log('DIFFERENT');
}
