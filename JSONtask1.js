//(i)
let emp1 = {
    name: 'Sam',
    dept: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raise: true
};
console.log(emp1);

let emp2 = {
    name: 'Mary',
    dept: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raise: true
};
console.log(emp2);

let emp3 = {
    name: 'Bill',
    dept: 'HR',
    designation: 'Executive',
    salary: 21200,
    raise: false
};
console.log(emp3);

//(ii)
const empArray = [emp1, emp2, emp3];
let company = {
    companyName: 'MilestoneOS',
    website: 'www.techstars.site',
    employees: empArray
};
console.log(company);

//(iii)
let emp4 = {
    name: 'Prateek',
    dept: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raise: false
};
company.employees.push(emp4);
console.log(company);

//(iv)
function computeSalary(comJSON){
    let empArr = comJSON.employees;
    let total = 0;
    for(let i=0;i<empArr.length;i++){
        let emp = empArr[i];
        total = total + emp.salary;
    }
    return total;
}
let totalSalary = computeSalary(company);
console.log('Total salary is',totalSalary);

