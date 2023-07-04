const people = [
    {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
];
function getPeopleByCountry(country) {
    const filteredPeople = people.filter(person => person.country === country);
    filteredPeople.sort((a, b) => b.age - a.age);
    return filteredPeople;
}
const country = "India";
const sortedPeople = getPeopleByCountry(country);
console.log(sortedPeople);
