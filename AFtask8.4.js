const jsonArray = [
    {"name":"Mary", "marks":[72,65,55,71]},
    {"name":"Anita", "marks":[66,70,75,53]},
    {"name":"Edward", "marks":[44,54,64,58]},
    {"name":"Thomas", "marks":[62,55,65,81]},
    {"name":"Robin", "marks":[41,44,47,49]},
    {"name":"Sophia", "marks":[71,73,67,77]},
    {"name":"Bruce", "marks":[52,57,61,64]}
];
function filterStudentsByAverageMarks(studentsArray, avg) {
    return studentsArray.filter(student => {
        let sum = 0;
        for (let i = 0; i < student.marks.length; i++) {
        sum += student.marks[i];
        }
        const average = sum / student.marks.length;
        return average > avg;
    });
}
const avg = 60;
const filteredStudents = filterStudentsByAverageMarks(jsonArray, avg);
console.log(filteredStudents);
