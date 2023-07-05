function getPersonsInContinent(personArray, continentArray, continent) {
    return personArray.filter(person => {
        const cityData = continentArray.find(cityObj => cityObj.city === person.city);
        return cityData && cityData.continent === continent;
    });
}
const persons = [
    {"name":"Mary","city":"London"},
    {"name":"Anita","city":"Paris" },
    {"name":"Edward","city":"New York"},
    {"name":"Thomas","city":"Rome"},
    {"name":"Robin","city":"Seattle"},
    {"name":"Sophia","city":"Los Angeles"},
    {"name":"Bruce","city":"Delhi"}
];
const continents = [
{"city":"London","continent":"Europe"},
{"city":"Delhi","continent":"Asia"},
{"city":"Seattle","continent":"North America"},
{"city":"Paris","continent":"Europe"},
{"city":"New York","continent":"North America"},
{"city":"Rome","continent":"Europe"},
{"city":"Bengaluru","continent":"Asia"},
{"city":"Los Angeles","continent":"North America"}
];
const filteredPersons = getPersonsInContinent(persons, continents, "Europe");
console.log(filteredPersons);
