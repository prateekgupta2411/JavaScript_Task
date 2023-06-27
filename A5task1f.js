let str = 'He is going to the temple';
let sep =' ';
let startPos = 0;
for(;;){
    let index = str.indexOf(sep,startPos);
    if(index>=0){
        let word = str.substring(startPos,index);
        console.log(word);
        startPos =  index +1;
    }
    else {
        let word = str.substring(startPos);
        console.log(word);
        break;
    }
}
// b
// Ans - break statement is used to exit or terminate a loop 
//It is commonly used in loops (such as for or while) and switch statements.
// The purpose of break is to immediately stop the execution of the innermost loop or switch block and 
//continue with the next statement outside of the loop.

//example 
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}