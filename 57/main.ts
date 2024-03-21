// A list of grades
let grades = [88, 77, 34, 56, 98, 85];
// calculates the average grade
let averageGrade = grades.reduce ((total , grade)=> total + grade , 0) / grades.length;
// show the average grades
console.log(averageGrade);
//first we add than divide by total 