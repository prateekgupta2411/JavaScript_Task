
const students = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":72,"science":75},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":81}
];
const filteredStudents = students.filter(student => {
    const totalMarks = student.maths + student.english + student.science;
    return totalMarks > 200;
});
const indices = [];
for (let i = 0; i < filteredStudents.length; i++) {
    const student = filteredStudents[i];
    const index = students.findIndex(s => s === student);
    indices.push(index);
}
console.log(filteredStudents); 
console.log(indices); 
