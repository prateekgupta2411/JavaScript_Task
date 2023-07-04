const array = [
    {"name":"Mary","marks":[72,65,55,71]},
    {"name":"Anita","marks":[66,70,75,53]},
    {"name":"Edward","marks":[44,54,64,58]},
    {"name":"Thomas","marks":[62,55,65,81]},
    {"name":"Robin","marks":[41,44,47,49]},
    {"name":"Sophia","marks":[71,73,67,77]},
    {"name":"Bruce","marks":[52,57,61,64]}
];
array.sort((a, b) => {
    const maxMarksA = Math.max(...a.marks);
    const maxMarksB = Math.max(...b.marks);
        return maxMarksA - maxMarksB;
});
console.log(array);
