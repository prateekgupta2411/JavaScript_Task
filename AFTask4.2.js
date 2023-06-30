const employees1 = [
    { name: 'Prateek', age: 21 },
    { name: 'Ritik', age: 38 },
    { name: 'Sajal', age: 35 },
    { name: 'Mahesh', age: 40 },
];
// a) age less than 35
const filteredByAge = employees1.filter((employee) => employee.age < 35);
console.log(filteredByAge);

// b) Filter for name of the employee starts with 'S'
const filteredByNameS = employees1.filter((employee) => employee.name[0] === 'S');
console.log(filteredByNameS);

// c) Filter for name of the employee starts with the character 'M' (parameter)
const filterChar = 'M';
const filteredByNameChar = employees1.filter((employee) => employee.name[0] === filterChar);
console.log(filteredByNameChar);
