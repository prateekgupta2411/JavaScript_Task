const students = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
];
function getStudentsByTotalMarks(minTotal) {
    const filteredStudents = students.filter(student => {
        let totalMarks = 0;
        for (let i = 0; i < student.marks.length; i++) {
            totalMarks += student.marks[i];
        }
        return totalMarks > minTotal;
    });

    filteredStudents.sort((a, b) => {
        let totalMarksA = 0;
        let totalMarksB = 0;
        for (let i = 0; i < a.marks.length; i++) {
            totalMarksA += a.marks[i];
        }
        for (let i = 0; i < b.marks.length; i++) {
            totalMarksB += b.marks[i];
        }
        return totalMarksB - totalMarksA;
    });

    return filteredStudents;
}
const minTotal = 250;
const sortedStudents = getStudentsByTotalMarks(minTotal);
console.log(sortedStudents);
