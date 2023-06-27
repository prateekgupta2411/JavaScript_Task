function removeChar(str) {
    let result = "";
    let ch = arguments[1];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ch) {
        result += str[i];
        }
    }
    
    return result;
}
let str = "moozoom";
let output = removeChar(str, "m");
console.log(output);
