let input = "ab11cd22ef";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "1") {
    output += "@";
    } else if (input[i] === "2") {
    output += "#";
    } else {
    output += input[i];
    }
}

console.log(output);
