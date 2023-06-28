// // (i)
// const nums = [2,10,14,16,7,9,6];
// let count = 0;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2 == 0){
//         count++;
//     }
// }
// console.log('No of even', count);

// // (ii)
// const numbers = [2,10,14,16,7,9,6];
// let Sum = 0;
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%5 == 0){
//         Sum += numbers[i];
//     }
// }
// console.log('sum of multiple of 5 is', Sum);

// // (iii)
// const strings = ['Hello','Good Morning','Bye'];
// for(let i=0;i<strings.length;i++){
//     let str = strings[i];
//     strings[i] = str.toUpperCase();
// }
// console.log(strings);

//(iv)
function hasPrime(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let check = isPrime(numbers[i]);
        if (check) {
        console.log('Found prime:', numbers[i]);
        return true;
        }
    }
    return false;
    }
        function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}
const input = [10, 20, 30, 17, 40];
const hasPrimeNumber = hasPrime(input);
console.log('Has prime number:', hasPrimeNumber);

// (v)
function hasB(str){
    for(let i=0;i<str.length;i++){
        if(str[i]=='b' || str[i]=='B'){
            return true;
        }
    }
    return false;
}
const string = ['Hi','Good Morning','Bye','Good','aba'];
let count = 0;
for(let i=0;i<string.length;i++){
    if (hasB(string[i])){
        count++;
    }
}
console.log('No of Strings b or B is',count);

//(vi)
let no = 6;
const nums = [];
for(let i=1;i<=no;i++){
    nums.push(i);
}
console.log(nums);

//(vii)
const num =[3,4,5,6,8];
const numno3 =[];
for(let i=0;i<nums.length;i++){
    if(num[i]%3 != 0){
        numno3.push(num[i]);
    }
}
console.log(numno3);

//(viii)
const strs = ['Hi','Hello','Hi'];
for(let i=0;i<strs.length;i++){
    if(strs[i]=='Hello'){
        strs.splice(i,1);
        break;
    }
}
console.log(strs);

//(ix)
const techs = ['C++','Java','JavaScript'];
for(let i=0;i<techs.length;i++){
    if(techs[i] == 'JavaScript'){
        techs.splice(i+1,0,'Angular','React','Node');
        break;
    }
}
console.log(techs);




