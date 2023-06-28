const inputString = 'javascript';
let abFound = false;
for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] === 'a' && inputString[i + 1] === 'b') {
    abFound = true;
    break;
    }
}
if (abFound) {
    console.log('AB FOUND');
} else {
    console.log('AB NOT FOUND');
}
