let str = "JAVA";
let halfLength = (str.length - 1) / 2;
let latterHalf = str.substring(halfLength + 1);
let firstHalf = str.substring(0, halfLength + 1);
let newStr = latterHalf + firstHalf;

console.log(newStr);
