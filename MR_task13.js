const jsonArray = [
    { "fname": "Jack", "lname": "Smith", "city": "London" },
    { "fname": "Mary", "lname": "Markle", "city": "Amsterdam" },
    { "fname": "Ed", "lname": "May", "city": "Paris" },
    { "fname": "Tim", "lname": "Gates", "city": "Rome" }
];
const result = jsonArray.map(obj => {
    const fullname = obj.fname + " " + obj.lname;
    return { ...obj, fullname };
});
console.log(result);
