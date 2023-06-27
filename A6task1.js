// task 1 a(i)
function largestOf3(n1,n2,n3){
    let large;
    if(n1>=n2 && n1>=n3){
        large = n1;
    }
    else if(n2>=n1 && n2>=n3){
        large = n2;
    }
    else {
        large = n3;
    }
    return large;
}
console.log(largestOf3(40,50,6));

// a(ii)
function replacechar(str,char1,char2){
    let outStr = '';
    let len = str.length;
    for(let i =0;i<len;i++){
        if(str[i]==char1){
            outStr = outStr + char2;
        }
        else {
            outStr = outStr + str[i];
        }
    }
    return outStr;
    }
    console.log(replacechar('aaacs','a','d'));

    // a(iii)

    function isSquare(num) {
        for(let i =1;i<=num;i++){
            let sq = i*i;
            if(sq==num){
                return true;
            }
        }
        return false;
    }
    console.log(isSquare(9));

    // a(iv)
    function factorial(n){
        let output = 1;
        for(let i=1;i<=n;i++){
            output = output * i;
        }
        return output;
    }
    let num = 5;
    console.log('Factorial of',num,'is',factorial(num));

    // a(v)

    function factorial(n){
        let output = 1;
        for(let i=1;i<=n;i++){
            output = output * i;
        }
        return output;
    }
    function printfacto(num){
        for(let i=1;i<=num;i++){
            let fact = factorial(i);
            console.log('factorial of',i,'is',fact);
        }
    }
    printfacto(5);

// b
// Ans -  function is a reusable block of code that performs a task. the reason of using function are;
// Code Reusability,Modularity,Code Organization & Maintainability.

// c
// Ans - 










