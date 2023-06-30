function filterNames(names, filterType, filterChar) {
    return names.filter((name) => {
        if (filterType === 'length') {
        return name.length > 5;
        }
        if (filterType === 'startsP') {
        return name[0] === 'P';
        }
        if (filterType === 'startsChar') {
        return name[0] === filterChar;
        }
        return false;
    });
}
// Test case 1: length of name is greater than 5
const names1 = ['Prateek', 'Riteshe', 'Jack', 'Toy'];
console.log(filterNames(names1, 'length'));

// Test case 2: starts with P
console.log(filterNames(names1, 'startsP'));

// Test case 3: starts with the character provided as a parameter
console.log(filterNames(names1, 'startsChar', 'J'));
