//sort the array in ascending order as in dictionary
function sortArrayAscending(arr) {
    return arr.slice().sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}
//sort the array in descending order as in dictionary
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });
}
//sort the array in ascending order of their length
function sortArrayByLengthAscending(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}

//sort the array in ascending order of the number of 'a' in them
function sortArrayByACountAscending(arr) {
    return arr.slice().sort((a, b) => {
        const countA = countOccurrences(a, 'a');
        const countB = countOccurrences(b, 'a');
        return countA - countB;
    });
}
//count the occurrences of a character in a string
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
        count++;
        }
    }
    return count;
}
// Test cases
const arr = ["JavaScript", "Hello", "React", "Java", "Python", "C", "Node"];

const sortedAscDictionary = sortArrayAscending(arr);
console.log("Ascending Order (Dictionary):", sortedAscDictionary);

const sortedDescDictionary = sortArrayDescending(arr);
console.log("Descending Order (Dictionary):", sortedDescDictionary);

const sortedAscLength = sortArrayByLengthAscending(arr);
console.log("Ascending Order (Length):", sortedAscLength);

const sortedAscACount = sortArrayByACountAscending(arr);
console.log("Ascending Order (A Count):", sortedAscACount);
