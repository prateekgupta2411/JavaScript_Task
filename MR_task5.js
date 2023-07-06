const input = [7, 2, 25, 10];

const output = input.map(number => {
    if (number % 2 === 0) {
    return "Even";
}
else {
    return "Odd";
    }
});
console.log(output);
