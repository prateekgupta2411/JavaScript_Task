let str = "qwNN*%bT";
let lowerCase = "";
let digits = "";
let upperCase = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'a' && char <= 'z') {
    lowerCase += char;
    } else if (char >= '0' && char <= '9') {
    digits += char;
    } else if (char >= 'A' && char <= 'Z') {
    upperCase += char;
    }
}

let newStr = lowerCase + digits + upperCase;
console.log(newStr);
