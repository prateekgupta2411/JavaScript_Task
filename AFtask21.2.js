const personArray = [
    { "name": "Mary", "city": "London" },
    { "name": "Anita", "city": "Paris" },
    { "name": "Edward", "city": "New York" },
    { "name": "Thomas", "city": "Rome" },
    { "name": "Robin", "city": "Seattle" },
    { "name": "Sophia", "city": "Los Angeles" },
    { "name": "Bruce", "city": "Delhi" }
];
const cityContinentArray = [
    { "city": "London", "continent": "Europe" },
    { "city": "Delhi", "continent": "Asia" },
    { "city": "Seattle", "continent": "North America" },
    { "city": "Paris", "continent": "Europe" },
    { "city": "New York", "continent": "North America" },
    { "city": "Rome", "continent": "Europe" },
    { "city": "Bengaluru", "continent": "Asia" },
    { "city": "Los Angeles", "continent": "North America" }
];
const sortedArray = personArray.sort((person1, person2) => {
    const continent1 = cityContinentArray.find(item => item.city === person1.city)?.continent;
    const continent2 = cityContinentArray.find(item => item.city === person2.city)?.continent;
    if (continent1 && continent2) {
        return continent1.localeCompare(continent2);
    }
    if (continent1) {
        return -1;
    }
    if (continent2) {
        return 1;
    }
    return 0;
});
console.log(sortedArray);
