// A list of grades
var grades = [88, 77, 34, 56, 98, 85];
// calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// show the average grades
console.log(averageGrade);
