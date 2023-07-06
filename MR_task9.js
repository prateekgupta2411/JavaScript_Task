const jsonArray = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
];
const result = jsonArray.map(function(obj) {
    return "<button onClick=clicked(" + obj.id + ")>" + obj.name + "</button>";
    }).reduce(function(acc, curr) {
    return acc + ' ' + curr;
});
console.log(result);
