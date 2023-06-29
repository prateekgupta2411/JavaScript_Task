let students = [
    {
        name: 'Mark',
        Maths: 80,
        English: 75,
        Science: 63
    },
    {
        name: 'Bob',
        Maths: 90,
        English: 81,
        Science: 88
    },
    {
        name: 'Julia',
        Maths: 88,
        English: 87,
        Science: 89
    },
    {
        name: 'Anthony',
        Maths: 60,
        English: 64,
        Science: 61
    }
];
let computerMarks = [
    { name: 'Mark', Computers: 90 },
    { name: 'Anthony', Computers: 70 },
    { name: 'Julia', Computers: 88 },
    { name: 'Bob', Computers: 81 }
];
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let computerMark = computerMarks.find(mark => mark.name === student.name);
    if (computerMark) {
        student.Computers = computerMark.Computers;
    }
}
//console.log(students);

























// task 7.3
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.Maths + student.English + student.Science + (student.Computers || 0);
    student.totalMarks = totalMarks;
    }
console.log(students);


















