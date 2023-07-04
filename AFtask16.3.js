const jsonArray = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
];
function countAndSortByMarks(jsonArray, cutoff) {
    const countedArray = jsonArray.map(item => {
        const count = item.marks.filter(mark => mark > cutoff).length;
        return { ...item, count };
    });
    countedArray.sort((a, b) => b.count - a.count);
    return countedArray;
}
const cutoff = 60;
const sortedArray = countAndSortByMarks(jsonArray, cutoff);
console.log(sortedArray);
