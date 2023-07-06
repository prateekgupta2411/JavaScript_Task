const jsonArray = [
    { "fname": "Jack", "lname": "Smith", "city": "London" },
    { "fname": "Mary", "lname": "Markle", "city": "Amsterdam" },
    { "fname": "Ed", "lname": "May", "city": "Paris" },
    { "fname": "Tim", "lname": "Gates", "city": "Rome" }
];
const citiesArray = jsonArray.map(obj => obj.city);

console.log(citiesArray);
