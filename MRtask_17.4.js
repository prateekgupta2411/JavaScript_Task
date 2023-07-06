const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

const ch = "J";
const countStartsWithCh = courses.reduce((count, course) => {
    if (course.startsWith(ch)) {
    return count + 1;
    }
    return count;
}, 0);

console.log("No of strings that start with", ch + ":", countStartsWithCh);
