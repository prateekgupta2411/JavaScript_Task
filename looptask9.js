let n = 3;
let letter = 'AB';
for (let i = 1; i <= n; i++) {
    let pattern = '';

    for (let j = 0; j < letter.length; j++) {
    pattern += letter.charAt(j) + i;
}
    console.log(pattern);
}
