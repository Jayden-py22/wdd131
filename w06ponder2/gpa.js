// gpa.js

// 1. 从指定的输入框获取成绩，返回一个经过清洗（去空格、转大写）的数组
function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    const gradesArray = grades.split(",");
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    return cleanGrades;
  }
  
  // 2. 将字母成绩转换为对应的 GPA 分值
  function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    // 如果遇到其他字母，可以再添加更多判断，或根据需要增加默认值
    return points;
  }
  
  // 3. 计算传入成绩数组的 GPA 值
  function calculateGpa(grades) {
    // 先把字母成绩转换成分值
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // 将所有分值加和，再除以科目数
    const total = gradePoints.reduce((sum, value) => sum + value, 0);
    const gpa = total / gradePoints.length;
    // 保留两位小数
    return gpa.toFixed(2);
  }
  
  // 4. 将结果显示在指定选择器对应的 HTML 元素中
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  }
  
  // 5. 点击按钮时执行的总流程：获取成绩、计算 GPA、输出结果
  function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
  }
  
  // 6. 注册按钮点击事件
  document.querySelector("#submitButton").addEventListener("click", clickHandler);