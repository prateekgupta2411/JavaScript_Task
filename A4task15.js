// task 15
var n = 9;
var result = "";

for (var i = 1; i <= n; i += 2) {
    result += i;
    if (i !== n) {
        result += "#";
    }
}
console.log(result);
