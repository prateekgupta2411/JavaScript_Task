const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

const longestString = courses.reduce((longest, current) => {
    if (current.length > longest.length) {
    return current;
}
else {
    return longest;
    }
});
console.log("Longest string:", longestString);
