let input = "XXXXYYYYYABXXYY";
let output = "";

for (let i = 0; i < input.length; i++) {
    if ((input[i] === "X" || input[i] === "Y") && (input[i] === input[i + 1])) {
    continue;
    }
    output += input[i];
}

console.log(output);
