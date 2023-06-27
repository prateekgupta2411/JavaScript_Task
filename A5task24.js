let input = "BAD CAR";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "A") {
    output += "X";
    } else if (input[i] === "B") {
    output += "Y";
    } else if (input[i] !== "C" && input[i] !== "D") {
    output += input[i];
    }
}

console.log(output);
