let str = "A1B2C3D4E";
let oddChars = "";
let evenChars = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
    evenChars += str[i];
    } else {
    oddChars += str[i];
    }
}

console.log("Odd: " + oddChars);
console.log("Even: " + evenChars);
