var n = 4;
var pattern = "";

for (var i = 0; i < n; i++) {
    if (i % 3 == 0) {
        pattern += "A";
    } else if (i % 3 == 1) {
        pattern += "B";
    } else {
        pattern += "C";
    }
}

console.log(pattern);
