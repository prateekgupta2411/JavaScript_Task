function countCharOccurrences(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
        count++;
        }
    }
    return count;
}
let str = "abracadabra";
let ch = "a";
let output = countCharOccurrences(str, ch);
console.log(output);
