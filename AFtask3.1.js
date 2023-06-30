function findNameAndIndex(names, condition) {
    const index = names.findIndex((name) => condition(name));
    if (index !== -1) {
        return { name: names[index], index: index };
    }
    return null;
}
const names = ['Prateek', 'Ritik', 'Jack', 'Toy'];

// Test case 1: Find name and index with length greater than 5
const result1 = findNameAndIndex(names, (name) => name.length > 5);
console.log(result1);

// Test case 2: Find name and index that starts with 'P'
const result2 = findNameAndIndex(names, (name) => name.startsWith('P'));
console.log(result2);

// Test case 3: Find name and index that starts with the character provided
const startChar = 'R';
const result3 = findNameAndIndex(names, (name) => name.startsWith(startChar));
console.log(result3);
