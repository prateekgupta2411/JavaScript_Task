function filterArray(jsonArray, searchString, isNameFilter) {
    if (isNameFilter) {
        return jsonArray.filter(obj => obj.name === searchString);
    } else {
        return jsonArray.filter(obj => obj.tech === searchString);
    }
}
const jsonArr = [
    {"name": "Jack", "tech": "Android"},
    {"name": "Mary", "tech": "React"},
    {"name": "Bob", "tech": "Angular"},
    {"name": "Steve", "tech": "Spring"},
    {"name": "James", "tech": "Android"},
    {"name": "Julia", "tech": "Android"},
    {"name": "Michel", "tech": "React"},
    {"name": "Bill", "tech": "Angular"},
    {"name": "Sonny", "tech": "Spring"},
    {"name": "Martins", "tech": "React"},
    {"name": "Bruce", "tech": "Angular"},
    {"name": "Sam", "tech": "Spring"}
];
const nameFilteredArray = filterArray(jsonArr, "Mary", true);
console.log("Name Filtered Array:", nameFilteredArray);

const techFilteredArray = filterArray(jsonArr, "React", false);
console.log("Tech Filtered Array:", techFilteredArray);
