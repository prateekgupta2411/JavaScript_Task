function count(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'b' || str[i] === 'c') {
        count++;
        }
    }
    return count;
}
function compareStrings(a, b) {
    const countA = count(a);
    const countB = count(b);
    if (countA !== countB) {
        return countA - countB;
} 
else {
        return a.length - b.length;
    }
}
function sortStringsByabcCount(strings) {
return strings.sort(compareStrings);
}
const input = ["bear", "bell", "cab", "hello"];
const sortedArray = sortStringsByabcCount(input);
console.log(sortedArray);
