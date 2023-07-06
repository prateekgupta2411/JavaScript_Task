const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
const countCharacterA = (count, course) => {
    for (let i = 0; i < course.length; i++) {
    // Check if the character is 'a' or 'A'
    if (course[i] === 'a' || course[i] === 'A') {
        count++;
    }
}
return count;
};
const totalCount = courses.reduce(countCharacterA, 0);

console.log("Total count of 'a' characters:", totalCount);
