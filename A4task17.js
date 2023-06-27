var n = 6;
var pattern = "";
var sum = 0;
for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        pattern += "+";
        sum += i;
    } else {
        pattern += "-";
        sum -= i;
    }
    pattern += i;
}
pattern += "=" + sum;
console.log(pattern);
