const jsonArray = [
    { "name": "Mary", "marks": 72 },
    { "name": "Anita", "marks": 75 },
    { "name": "Thomas", "marks": 81 },
    { "name": "Bruce", "marks": 64 }
];
const result = jsonArray.map(function(obj) {
    return "<tr><td>" + obj.name + "</td><td>" + obj.marks + 
    "</td><td><button onClick=show('" + obj.name + "')>Show More</button></td></tr>";
    }).reduce(function(acc, curr) {
    return acc + curr;
}, '');

console.log(result);
