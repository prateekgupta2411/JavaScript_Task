// task1 
// a
let str = "zzebra";
let count  = 0;
for(let i=0;i<str.length;i++){
    if(str[i] == 'z'){
        count++;
    }
}
console.log(count)

// b
let Str = "Prateek";
let counts  = '';
for(let i=0;i<Str.length;i++){
    counts += Str[i] + Str[i];
}
console.log(counts)

// c
let stri = '2*a+3-c+d';
let alpha ='';
let digits = '';
let rest = '';
for(let i =0;i<stri.length;i++){
    if(stri[i]>='a'&&stri[i]<='z'){
        alpha += stri[i];
    }
    else if(stri[i]>='A'&&stri[i]<='Z'){
        alpha += stri[i];
    }
    else if(stri[i]>='0'&&stri[i]<='9'){
        digits += stri[i];
    }
    else {
        rest += stri[i];
    }
}
console.log(alpha, rest, digits);

// d
let strin = 'a##b#c###';
let out ='';
let len = strin.length;
for(let i=0;i<len;i++){
    let ch = strin[i];
    let prevCh = strin[i-1];
    if(ch=='#'){
        if(prevCh=='#'){
        }
        else{
            out += ch;
        }
    }
    else {
        out += ch;
    }
}
console.log(out);

// e
let str1 = 'Noyescheck';
let str2 = 'yes';
let result = 0;
let startPos = 0;
for (;;){
    let index = str1.indexOf(str2,startPos);
    if(index>=0){
        result++;
        startPos = index + 1;
    }
    else {
        break;
    }
}
console.log(result);