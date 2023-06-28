const numbers = [100, 200, 10, 20, 50, 64];
let count = 0;
let values = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 21) {
    count++;
    values.push(numbers[i]);
    }
}
console.log('Count =', count);
console.log('Values =',values + ',');
