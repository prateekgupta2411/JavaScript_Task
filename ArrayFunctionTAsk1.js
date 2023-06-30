//Task a(i)
// const nums  = [2,5,8,10,12,14,15];
// let x = 11;
// let nums1 = nums.find(function(n){
//     return n>x;
// });
// console.log('Find',nums1);
// let index = nums.findIndex(function(n){
//     return n>x;
// })
// console.log('Index',index);
// let arr = nums.filter(function(n){
//     return n>x;
// });
// console.log('Filter',arr);

//Task a(ii)

// const names = ['Prateek','ritik','jack','Joy'];
// const ch = 'P';
// let name1 = names.find(function(name){
//     return isstarting(name,ch);
// });
// console.log('Find',name1);

// function isstarting(name,start){
//     return name[0]==start;
// }

// let index1 = names.findIndex(function(name){
//     return isstarting(name,ch);
// });
// console.log('Index',index1);

// let arr1 = names.filter(function(name){
//     return isstarting(name,ch);
// })
// console.log(arr1);

// Task a(iii)
// const names = ['Prateek', 'ritik', 'jack', 'Joy'];
// const ch = 'P';
// const isStarting = function(name, start) {
//     return name[0] === start;
// };
// const name1 = names.find(function(name) {
//     return isStarting(name, ch);
// });
// console.log('Find', name1);
// const index1 = names.findIndex(function(name) {
//     return isStarting(name, ch);
// });
// console.log('Index', index1);
// const arr1 = names.filter(function(name) {
//     return isStarting(name, ch);
// });

// task a(iv)
const emps = [
    {name:'Jack',city:'Delhi',dept:'Tech'},
    {name:'Ana',city:'London',dept:'Tech'},
    {name:'Sam',city:'London',dept:'HR'},
    {name:'Tim',city:'Delhi',dept:'HR'},
    {name:'Bon',city:'Delhi',dept:'Tech'},
    {name:'Mary',city:'London',dept:'Tech'},
];
let city = 'Delhi';
let dept = 'HR';
let emp1 = emps.find(function(emp){
    return emp.city==city && emp.dept==dept;
})
console.log(emp1);
let index = emps.findIndex(function(emp){
    return emp.city==city && emp.dept==dept;
});
console.log(index);
let arr = emps.filter(function(emp){
    return emp.city==city && emp.dept==dept;
});
console.log(arr);









