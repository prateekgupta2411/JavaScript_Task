let str = "qwNN*%bT";
let newStr = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
    newStr += char + char;
    } else if (char >= 'a' && char <= 'z') {
    newStr += char + char;
    } else if (char >= '0' && char <= '9') {
    newStr += char + char + char;
    }
}

console.log(newStr);
