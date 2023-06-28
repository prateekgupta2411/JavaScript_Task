const numbers = [5,7,9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
    numbers[i] += 1;
    }
}
console.log(numbers);
