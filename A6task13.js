function maxCharCount(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let maxCount = 0;
    let maxChar = "";
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
        }
    }
    return maxCount;
}
let str = "90045";
let output = maxCharCount(str);
console.log(output);

