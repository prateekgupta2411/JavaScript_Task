var n = 3;
var pattern = "";

for (var i = n; i >= 1; i--) {
    if (i % 3 === 0) {
        pattern += "x";
    } else {
        pattern += i;
    }
}

console.log(pattern);
