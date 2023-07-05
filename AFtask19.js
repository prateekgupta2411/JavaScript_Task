const arr = ["aa", "car", "is", "going"];

const filteredArr = arr.reverse().filter(str => {
    return str.includes('a') || str.includes('b') || str.includes('c');
});
console.log(filteredArr);
