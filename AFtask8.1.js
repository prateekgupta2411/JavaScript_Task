// Array of JSON objects
const jsonArray = [
    {"name": "Mary", "marks": [72, 65, 55, 71]},
    {"name": "Anita", "marks": [66, 70, 75, 53]},
    {"name": "Edward", "marks": [44, 54, 64, 58]},
    {"name": "Thomas", "marks": [62, 55, 65, 81]},
    {"name": "Robin", "marks": [41, 44, 47, 49]},
    {"name": "Sophia", "marks": [71, 73, 67, 77]},
    {"name": "Bruce", "marks": [52, 57, 61, 64]}
];
function filterByTotalMarks(jsonArray, n) {
    return jsonArray.filter((json) => {
        let totalMarks = 0;
        for (let i = 0; i < json.marks.length; i++) {
        totalMarks += json.marks[i];
        }
        return totalMarks < n;
    });
}
const n = 250;
const filteredArray = filterByTotalMarks(jsonArray, n);
console.log(filteredArray);
