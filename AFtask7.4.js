const jsonArray = [
    {"name": "Jack", "country": "USA", "age": 35},
    {"name": "Amit", "country": "India", "age": 38},
    {"name": "Edward", "country": "USA", "age": 41},
    {"name": "Vishal", "country": "India", "age": 30},
    {"name": "Annie", "country": "USA", "age": 27},
    {"name": "Nick", "country": "France", "age": 32},
    {"name": "Francis", "country": "France", "age": 44},
    {"name": "Preeti", "country": "India", "age": 25},
    {"name": "Sophie", "country": "France", "age": 29},
    {"name": "Harpreet", "country": "India", "age": 48},
    {"name": "Bob", "country": "USA", "age": 21}
];
const filteredArray = jsonArray.filter(obj => obj.country === "India" || obj.country === "USA");
console.log(filteredArray);

const firstMatch = jsonArray.find(obj => obj.country === "India" || obj.country === "USA");
console.log(firstMatch);

const firstMatchIndex = jsonArray.findIndex(obj => obj.country === "India" || obj.country === "USA");
console.log(firstMatchIndex);
