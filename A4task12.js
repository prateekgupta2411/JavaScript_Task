let n = 3;
let pattern = "";
for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
    pattern += "X";
} else {
    pattern += "Y";
}
console.log(pattern);
}
