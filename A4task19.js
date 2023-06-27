var n = 2;
var divide = "";
var notDivide = "";

for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
        divide += i + "#";
    } else {
        notDivide += i + "#";
    }
}

console.log("Divide: " + divide);
console.log("Not Divide: " + notDivide);
