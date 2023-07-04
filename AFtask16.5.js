const students = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
];
function getStudentsByMinScore(minScore) {
    const filteredStudents = students.filter(student => {
        for (let i = 0; i < student.marks.length; i++) {
        if (student.marks[i] <= minScore) {
            return false;
        }
    }
    return true;
    });
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
    return filteredStudents;
}
const minScore = 60;
const filteredStudents = getStudentsByMinScore(minScore);
console.log(filteredStudents);
