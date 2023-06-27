// a(i)
let n = 3; 
let rem = n %2;
if(rem == 1){
    n++;
}
console.log(n);

// a(ii)
let num = 24;
if(num%6 ==0){
    console.log("Divisible by 6");
}
else if(num % 3==0){
    console.log("Divisible by 3");
}
else if (num %2==0){
    console.log("Divisible by 2");
}
else{
    console.log("not divisible by 2,3 and 6");
}

// a(iii)
let number =6;
let str = '';
for(let i=1; i<=number;i++){
    if(i%2==1){
        str = str +'J';
    }
    else {
        str = str + 'k';
    }
}
console.log(str);

//a(iv)
let no = 2;
let count = 0;
for(let i =2;i<no;i++){
    if(no%i==0){
        count++;
    }
}
if(count ==0){
    if(no==1){
        console.log('1 is neither prime nor composite');
    }
    else{
        console.log('Prime');
    }
}
else {
    console.log('composite');
}
