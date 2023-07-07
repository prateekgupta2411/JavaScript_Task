const students = [
    {"name": "Mary", "marks": [72, 65, 55, 71]},
    {"name": "Anita", "marks": [66, 70, 75, 53]},
    {"name": "Edward", "marks": [44, 54, 64, 58]},
    {"name": "Thomas", "marks": [62, 55, 65, 81]},
    {"name": "Robin", "marks": [41, 44, 47, 49]},
    {"name": "Sophia", "marks": [71, 73, 67, 77]},
    {"name": "Bruce", "marks": [52, 57, 61, 64]}
];
function countStudentsWithMoreThan70(students) {
    const count = students.filter(function(student) {
        const maxMarks = student.marks.reduce(function(max, mark) {
            return mark > max ? mark : max;
        }, 0);
        return maxMarks > 70;
    }).length;
    return count;
}
console.log(countStudentsWithMoreThan70(students));
