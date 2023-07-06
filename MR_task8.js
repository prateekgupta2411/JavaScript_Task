const names = ["Mark", "James", "Martha"];
const string = "<ul>" + names.map(name => "<li>" + name + "</li>").join("") + "</ul>";
console.log(string);
