function sumOfDigits(n) {
    let sum = 0;
    while (true) {
        if (n === 0) {
            break;
        }
        let digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}
let n = 24681;
let output = sumOfDigits(n);
console.log(output);