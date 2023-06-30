// task 1 b(i)
const array = ["jack", "Tim", "Anna", "Steve", "Ed"];

array.sort(function(a, b) {
    return a.length - b.length;
});
console.log(array);

// task 1 b(ii)
const products = [
    { name: 'Pepsi', qty: 20, price: 15 },
    { name: 'Coke', qty: 18, price: 10 },
    { name: 'Maggi', qty: 10, price: 12 },
    { name: 'Colgate', qty: 6, price: 55 },
    { name: 'Nescafe', qty: 30, price: 5 }
];
products.sort(function(a, b) {
    const salesValueA = a.qty * a.price;
    const salesValueB = b.qty * b.price;
    return salesValueB - salesValueA;
});
console.log(products);

// task 1 b(iii)

function filterAndSortStudents(arr, mincut) {
    const filteredArray = arr.filter(function(student) {
        const totalMarks = student.marks1 + student.marks2;
        return totalMarks > mincut;
    });
    const sortedArray = filteredArray.sort(function(a, b) {
        const totalMarksA = a.marks1 + a.marks2;
        const totalMarksB = b.marks1 + b.marks2;
        return totalMarksB - totalMarksA;
    });
    return sortedArray;
    }
    const studentArray = [
        { name: 'Jack', marks1: 33, marks2: 25 },
        { name: 'Bob', marks1: 40, marks2: 32 },
        { name: 'Mary', marks1: 41, marks2: 40 },
        { name: 'Tom', marks1: 24, marks2: 25 },
        { name: 'Harry', marks1: 30, marks2: 35},
        { name: 'Anna', marks1: 32, marks2: 37},
    ];
const mincut = 59;
const resultArray = filterAndSortStudents(studentArray, mincut);
console.log(resultArray);
