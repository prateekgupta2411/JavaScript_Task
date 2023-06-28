const numbers = [10,8,6,4,2,0];
const first = numbers[0];
const last = numbers[numbers.length - 1];
if (first > last) {
    console.log('FIRST:',first);
} else if (last > first) {
    console.log('LAST:',last);
} else {
    console.log('EQUAL:',first);
}
