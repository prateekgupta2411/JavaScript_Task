const array = [
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
array.sort((a, b) => {
    if (a.country !== b.country) {
        return a.country.localeCompare(b.country);
    } else {
        return a.age - b.age;
    }
});
console.log(array);
