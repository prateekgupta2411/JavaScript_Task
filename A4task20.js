var n = 1234;
var sum = 0;

for (var i = 1; i <= 4; i++) {
    var lastDigit = n % 10;
    sum += lastDigit;
    n = (n - lastDigit) / 10;
}

console.log(sum);
