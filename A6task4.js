function isRightTriangle(a, b, c) {
    // Check if the sum of squares of two smaller sides is equal to the square of the largest side
    if (a * a + b * b === c * c || b * b + c * c === a * a || c * c + a * a === b * b) {
        return true;
    } else {
        return false;
    }
}
let side1 = 10;
let side2 = 14;
let side3 = 16;
let result = isRightTriangle(side1, side2, side3);
console.log(result);
