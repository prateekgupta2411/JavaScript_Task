function compareCharOccurrences(str) {
    let char1Count = 0;
    let char2Count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char1) {
        char1Count++;
        } else if (str[i] === char2) {
        char2Count++;
        }
    }
    if (char1Count > char2Count) {
        return 1;
    } else if (char1Count === char2Count) {
        return 0;
    } else {
        return -1;
    }
}
let str = "aaacdef";
let char1 = "c";
let char2 = "x";
let output = compareCharOccurrences(str);
console.log(output);

