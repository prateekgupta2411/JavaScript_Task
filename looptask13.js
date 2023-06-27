// task 13
let n = 4;
let output = '';

for (let i = 1; i <= n; i++) {
  output += 'XY' + (2 * i - 1) + (2 * i);
}

console.log(output);