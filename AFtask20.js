const arr = ["name", "Java", "Master", "tech"];
const filteredArr = arr.filter(str => {
    for(let i=0;i<str.length;i++){
        const char = str[i];
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
    }
    return false;
})
console.log(filteredArr);
