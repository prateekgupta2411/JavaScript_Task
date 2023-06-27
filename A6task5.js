function isTriangle(a, b, c) {
    // Check if the sum of any two sides is greater than the third side.
    return a + b > c && b + c > a && c + a > b;
}
const sideA = 5;
const sideB = 6;
const sideC = 7;
const result = isTriangle(sideA, sideB, sideC);
console.log(result); // Output: false
