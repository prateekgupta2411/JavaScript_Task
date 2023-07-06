const jsonData = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
];
const string = jsonData.map(item => {
    return "<p class='id" + item.id + "'>" + item.name + "</p>";
    }).reduce(function(acc, curr) {
    return acc + ' ' + curr;
});
console.log(string);
