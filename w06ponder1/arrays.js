// arrays.js

// Activity 1 - Map
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; // HTML 字符串模板
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // 正确渲染 HTML

// Activity 2 & 3 - Map & Reduce (成绩转 GPA 计算)
const grades = ["A", "B", "A"];
function convertGradeToNumber(grade) { // 修复拼写
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    return 0;
}
const gpaPoints = grades.map(convertGradeToNumber);
console.log("GPA Points:", gpaPoints);
const totalPoints = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = totalPoints / gpaPoints.length;
console.log("Average GPA:", gpa);

// Activity 4 - Filter (筛选长度小于6的水果)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);
console.log("Short Words:", shortWords);

// Activity 5 - indexOf (查找幸运数字)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky Number Index:", luckyIndex !== -1 ? luckyIndex : "Not found");