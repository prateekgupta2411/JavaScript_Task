//Task a(i)
const nums  = [2,5,8,10,12,14,15];
let x = 11;
let nums1 = nums.find(function(n){
    return n>x;
});
console.log('Find',nums1);
let index = nums.findIndex(function(n){
    return n>x;
})
console.log('Index',index);
let arr = nums.filter(function(n){
    return n>x;
});
console.log('Filter',arr);
