var str = 'my#mother';
var newStr = '';

for (var i = 0; i < str.length; i++) {
    if (str[i] !== 'm') {
    newStr += str[i];
    }
}

console.log(newStr);
