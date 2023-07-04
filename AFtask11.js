function concatenateArrayWithSeparator(array, separator) {
    return array.join(separator) + separator;
}
const inputArray = ["A", "B", "C"];
const separator = "Level:";
const outputString = concatenateArrayWithSeparator(inputArray, separator);
console.log(outputString);