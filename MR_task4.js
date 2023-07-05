const input = [5, 10, 5, 10, 5, 10];

const output = input.map(number => {
    if (number % 2 === 0) {
    return number;
}
else {
    return 0;
    }
});
console.log(output);
