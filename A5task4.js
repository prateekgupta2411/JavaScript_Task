var str = "x+y+xy+4x=7";
var countX = 0;
var countY = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
        countX++;
    } else if (str[i] === 'y') {
        countY++;
    }
}

console.log("x=" + countX);
console.log("y=" + countY);