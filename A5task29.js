let str = "ABCD JS";
let searchStr = "ABCD";
let replaceStr = "XYZ";
let output = "";

for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + searchStr.length) === searchStr) {
    output += replaceStr;
    i += searchStr.length - 1;
    } else {
    output += str[i];
    }
}

console.log(output);
