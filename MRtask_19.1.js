const people = [
    {"fname": "Jack", "lname": "Smith", "city": "London"},
    {"fname": "Mary", "lname": "Markle", "city": "London"},
    {"fname": "Ed", "lname": "May", "city": "Paris"},
    {"fname": "Tim", "lname": "Gates", "city": "Rome"}
];
const countLondonPeople = people.reduce((count, person) => {
    if (person.city === "London") {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log(countLondonPeople);
