const arr = [20, 14, 2, 7, 18];
const popElements = [];
for (let i = arr.length - 1; i >= 0; i--) {
    popElements.push(arr.pop());
}
console.log("Pops = " + popElements);