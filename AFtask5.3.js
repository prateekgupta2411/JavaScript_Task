const strings = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];
const ch = 'y';

// Find the index of the first string that contains ch
const index = strings.findIndex(str => str.includes(ch));

// Get the first string that contains ch
const string = index !== -1 ? strings[index] : undefined;

// Filter the array
const filteredArray = strings.filter(str => str.includes(ch));

console.log(string); 
console.log(index); 
console.log(filteredArray);
