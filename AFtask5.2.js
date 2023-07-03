const strings = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];
const ch = 'a';

// Find the index of the first string ending with ch
const index = strings.findIndex(str => str.endsWith(ch));

// Get the first string ending with ch
const string = index !== -1 ? strings[index] : undefined;

// Filter the array
const filteredArray = strings.filter(str => str.endsWith(ch));

console.log(string);
console.log(index); 
console.log(filteredArray); 
