var str = 'zoom';
var newStr = '';

for (var i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
    newStr += 'x';
    } else {
    newStr += str[i];
    }  
}

console.log(newStr);
