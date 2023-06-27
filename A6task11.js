function countPrimes(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
        count++;
        }
    }
    return count;
    }
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
let n = 75;
let output = countPrimes(n);
console.log(output);
