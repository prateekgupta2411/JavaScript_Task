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
let studentDetails = [];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let maxMark = student.Maths;
    if (student.English > maxMark) {
    maxMark = student.English;
    }
    if (student.Science > maxMark) {
    maxMark = student.Science;
    }
    if (student.Computers && student.Computers > maxMark) {
    maxMark = student.Computers;
    }
let avgMark = (student.Maths + student.English + student.Science + (student.Computers)) / 4;

let studentInfo = {
    name: student.name,
    avgMarks: avgMark,
    maxMarks: maxMark
};
studentDetails.push(studentInfo);
}
console.log(studentDetails);
