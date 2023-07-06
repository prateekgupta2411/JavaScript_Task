const str = ["Hello", "World", "Hi", "All"];

//Concatenate all the strings with "::" between them
const concatenatedString = str.reduce((acc, curr) => acc + "::" + curr);
console.log("Concatenated String:", concatenatedString);

//Compute the sum of the length of all the strings
const totalLength = str.reduce((acc, curr) => acc + curr.length, 0);
console.log("Total Length:", totalLength);

//Concatenate the first character of all the strings
const firstCharacters = str.reduce((acc, curr) => acc + curr[0], "");
console.log("First Characters:", firstCharacters);
