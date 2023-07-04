const jsonData = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
];
const filteredData = jsonData.filter(obj => {
    const marksGreaterThan70 = obj.marks.filter(mark => mark > 70);
    return marksGreaterThan70.length >= 2;
});
console.log(filteredData);
