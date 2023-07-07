const students = [
    {"name": "Mary", "marks": [72, 65, 55, 71]},
    {"name": "Anita", "marks": [66, 70, 75, 53]},
    {"name": "Edward", "marks": [44, 54, 64, 58]},
    {"name": "Thomas", "marks": [62, 55, 65, 81]},
    {"name": "Robin", "marks": [41, 44, 47, 49]},
    {"name": "Sophia", "marks": [71, 73, 67, 77]},
    {"name": "Bruce", "marks": [52, 57, 61, 64]}
];
function compareByTotalMarks(a, b) {
    const totalMarksA = a.marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);
    const totalMarksB = b.marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);
    return totalMarksA - totalMarksB;
}
const sortedByTotalMarks = students.sort(compareByTotalMarks);
console.log(sortedByTotalMarks);
