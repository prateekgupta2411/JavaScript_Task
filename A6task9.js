function isGoodExpression(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
        count++;
        } else if (str[i] === ")") {
        if (count === 0) {
            return false;
        }
        count--;
        }
    }
    return count === 0;
}
let str = "))a+b((";
let output = isGoodExpression(str);
console.log(output);
