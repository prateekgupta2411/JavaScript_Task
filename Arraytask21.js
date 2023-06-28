const names = ['Jack', 'Bob', 'Ed', 'Steve'];
const nameToRemove = 'Steve';
const index = names.indexOf(nameToRemove);
if (index !== -1) {
    names.splice(index, 1);
}
console.log(names);
