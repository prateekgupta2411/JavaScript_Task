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
const filteredStudents = students.filter(student => student.name.length < 6);
console.log(filteredStudents);

const firstStudent = students.find(student => student.name.length < 6);
console.log("First student:", firstStudent);

const firstStudentIndex = students.findIndex(student => student.name.length < 6);
console.log("Index of the first student:", firstStudentIndex);
