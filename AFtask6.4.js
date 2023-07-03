const students = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":72,"science":75},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":81}
];
function findStudentWithScoreGreaterThanN(students, n) {
    return students.findIndex(student => {
        return student.maths > n && student.english > n && student.science > n;
    });
}
const n = 60;
const index = findStudentWithScoreGreaterThanN(students, n);
if (index !== -1) {
    console.log("Student:", students[index]);
    console.log("Index:", index);
} 
else {
    console.log("No student found score greater than", n, "in all subjects");
}
