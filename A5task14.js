let str = "q#w2@B**5g";
let newstr = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) {
    newstr += char;
    }
}

console.log(newstr);
