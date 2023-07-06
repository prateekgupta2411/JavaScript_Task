const jsonArray = [
    {"name": "Mark", "age": 23},
    {"name": "Steve", "age": 28},
    {"name": "Mary", "age": 25},
    {"name": "Bill", "age": 34}
];
// a)sum of ages
const sumOfAges = jsonArray.reduce((acc, person) => acc + person.age, 0);
console.log("Sum of ages:", sumOfAges);

// b) Count the number of persons who are more than 27 years of age
const countOver27 = jsonArray.reduce((count, person) => person.age > 27 ? count + 1 : count, 0);
console.log("Number of persons older than 27:", countOver27);

// c)youngest person
const youngestPerson = jsonArray.reduce((youngest, person) => 
(person.age < youngest.age) ? person : youngest);
console.log("Youngest person:", youngestPerson);

// d)oldest person
const oldestPerson = jsonArray.reduce((oldest, person) =>
(person.age > oldest.age) ? person : oldest);
console.log("Oldest person:", oldestPerson);

// e) Count the number of people whose name starts with 'M'
const countStartsWithM = jsonArray.reduce((count, person) => 
person.name.startsWith('M') ? count + 1 : count, 0);
console.log("Number of people whose name starts with 'M':", countStartsWithM);
