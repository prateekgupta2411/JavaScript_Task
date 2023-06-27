let str = "qw23BN**45g";
let newstr = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        newstr += str[i];
    }
}

console.log("Digits=" + newstr);
