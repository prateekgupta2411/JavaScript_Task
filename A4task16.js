var n = 5;
var pattern = "";

for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        pattern += "+";
    } else {
        pattern += "-";
    }
    pattern += i;
}
console.log(pattern);
