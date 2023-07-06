const jsonArr = [
    { "name": "Mark", "age": 23 },
    { "name": "Steve", "age": 28 },
    { "name": "Mary", "age": 25 },
    { "name": "Bill", "age": 34 }
];
const output = jsonArr.map(obj => obj.name + " is " + obj.age + " years old");
console.log(output);
