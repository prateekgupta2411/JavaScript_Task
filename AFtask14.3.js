const array = [
    {"name":"Jack","maths":55,"english":60,"science":62},
    {"name":"Anita","maths":62,"english":65,"science":56},
    {"name":"Thomas","maths":68,"english":58,"science":54},
    {"name":"Steve","maths":51,"english":56,"science":68},
    {"name":"Julia","maths":47,"english":77,"science":72},
    {"name":"Mary","maths":72,"english":55,"science":60}
];
array.sort((a, b) => {
    const totalMarksA = a.maths + a.english + a.science;
    const totalMarksB = b.maths + b.english + b.science;
    return totalMarksA - totalMarksB;
});
console.log(array);
