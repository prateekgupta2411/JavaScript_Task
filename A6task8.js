function hasEqualBrackets(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
        count++;
        } else if (str[i] === ")") {
        count--;
        }
        if (count < 0) {
        return false;
        }
    }
    return count === 0;
}
let str = '5+(((a+b)*c)+d+e)-7';
let output = hasEqualBrackets(str);
console.log(output);