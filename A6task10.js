function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
        return false;
        }
    }
    return true;
}
let number = 5;
let output = isPrime(number);
console.log(output);
