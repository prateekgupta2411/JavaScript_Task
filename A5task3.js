var str = "moo zoom";
var substring = "m";
var count = 0;
var position = str.indexOf(substring);

while (position !== -1) {
    count++;
    position = str.indexOf(substring, position + 1);
}

console.log("Count of " + substring + "=" + count);
