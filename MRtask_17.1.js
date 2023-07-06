const coursesArray = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
const concatenatedString = coursesArray.reduce((acc, course) => acc + "#" + course);
console.log(concatenatedString);
