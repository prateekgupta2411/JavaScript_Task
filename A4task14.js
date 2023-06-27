var n = 6;
var output = "";

for (var i = 1; i <= n; i++) {
    if (i % 3 === 1) {
    output += "P" + i;
    } else if (i % 3 === 2) {
    output += "Q" + i;
} else {
    output += "R" + i;
}
}

console.log(output);
