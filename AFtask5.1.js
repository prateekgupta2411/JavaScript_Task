function findStringEndingWithT(strings) {
    const index = strings.findIndex((str) => str[str.length - 1] === 't');
    const foundString = strings[index];
    return { foundString, index };
}
function filterStringsEndingWithT(strings) {
    return strings.filter((str) => str[str.length - 1] === 't');
}
// Array of String
const strings = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];

// Find the first string ending in 't' and its index

const { foundString, index } = findStringEndingWithT(strings);
console.log(`Found string: ${foundString}, Index: ${index}`);

// Filter the array for strings ending in 't'

const filteredStrings = filterStringsEndingWithT(strings);
console.log(filteredStrings);
