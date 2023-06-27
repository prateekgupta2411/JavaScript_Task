let input = "1234567890";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "1") {
    output += "@";
    } else if (input[i] === "2") {
    output += "#";
    } else if (input[i] === "3") {
    output += "&";
    } else if (input[i] >= "4" && input[i] <= "9") {
    output += "$";
    } else {
    output += input[i];
    }
}

console.log(output);
