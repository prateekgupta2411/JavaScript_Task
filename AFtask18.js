function String(str) {
    const numberString = str.replace(/\D/g, ''); // Remove non-digit characters
    return parseInt(numberString);
}
function compare(a, b) {
    const numberA = String(a);
    const numberB = String(b);
    return numberA - numberB;
}
function sortString(strings) {
    return strings.sort(compare);
}
const input = ["c101", "mB24x", "a4b6n7", "zzz2z"];
const sortedArray = sortString(input);
console.log(sortedArray);
