function findEmployeeByAgeLessThan(employees, age) {
    const employee = employees.find((emp) => emp.age < age);
    const index = employees.findIndex((emp) => emp.age < age);
    return { employee, index };
}
function findEmployeeByNameStartsWith(employees, startsWith) {
    const employee = employees.find((emp) => emp.name[0] === startsWith);
    const index = employees.findIndex((emp) => emp.name[0] === startsWith);
    return { employee, index };
}
const employees1 = [
    { name: 'Prateek', age: 21 },
    { name: 'Ritik', age: 38 },
    { name: 'sajal', age: 35 },
    { name: 'Mahesh', age: 40 },
];
// Test case 1: Find employee with age less than 35
console.log(findEmployeeByAgeLessThan(employees1, 35));

// Test case 2: Find employee with name starting with 'S'
console.log(findEmployeeByNameStartsWith(employees1, 's'));

// Test case 3: name of the employee starts with the character provided as parameter
console.log(findEmployeeByNameStartsWith(employees1, 'M'));
