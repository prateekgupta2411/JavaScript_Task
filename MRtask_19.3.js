const jsonArray = [
    {"fname": "Jack", "lname": "Smith", "city": "London"},
    {"fname": "Mary", "lname": "Markle", "city": "London"},
    {"fname": "Ed", "lname": "May", "city": "Paris"},
    {"fname": "Tim", "lname": "Gates", "city": "Rome"}
];

const findCityByFirstName = (arr, firstName) => {
    const person = arr.find(obj => obj.fname === firstName);
    return person ? person.city : null;
};
console.log(findCityByFirstName(jsonArray, "Mary")); 
console.log(findCityByFirstName(jsonArray, "Tim"));
console.log(findCityByFirstName(jsonArray, "Tom")); 
