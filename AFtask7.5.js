const students = [
    {"name": "Jack", "country": "USA", "age": 35},
    {"name": "Amit", "country": "India", "age": 38},
    {"name": "Edward", "country": "USA", "age": 41},
    {"name": "Vishal", "country": "India", "age": 30},
    {"name": "Annie", "country": "USA", "age": 27},
    {"name": "Nick", "country": "France", "age": 32},
    {"name": "Francis", "country": "France", "age": 44},
    {"name": "Preeti", "country": "India", "age": 25},
    {"name": "Sophie", "country": "France", "age": 29},
    {"name": "Harpreet", "country": "India", "age": 48},
    {"name": "Bob", "country": "USA", "age": 21}
];

function filterStudentsByAge(students, minAge) {
    const filteredStudents = students.filter(student => student.age > minAge);
    const firstStudent = filteredStudents.find(student => student.age > minAge);
    const firstStudentIndex = students.findIndex(student => student.age > minAge);

    return {
        filteredStudents,
        firstStudent,
        firstStudentIndex
    };
}
const minAge = 30; // minimum age
const { filteredStudents, firstStudent, firstStudentIndex } = filterStudentsByAge(students, minAge);

console.log("Filtered Students:", filteredStudents);
console.log("First Student with age greater than minAge:", firstStudent);
console.log("Index of First Student with age greater than minAge:", firstStudentIndex);
