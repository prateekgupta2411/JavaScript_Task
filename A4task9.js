let n = 5;

for (let i = 1; i <= n; i++) {
    let square = i * i;
    let result = "Square of " +i+ " = " + square + " : ";
    if (square % 2 === 0) {
    result += "even";
} else {
    result += "odd";
}
    console.log(result);
}
