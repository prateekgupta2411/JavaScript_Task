const numbers = [3, 4, 5, 12];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
    } else {
    oddSum += numbers[i];
    }
}
console.log('Even Sum =', evenSum);
console.log('Odd Sum =', oddSum);
