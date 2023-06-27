let str = "123123";
let halfLength = str.length / 2;
let firstHalf = str.substring(0, halfLength);
let secondHalf = str.substring(halfLength);

if (firstHalf === secondHalf) {
    console.log("Yes");
} else {
    console.log("No");
}
