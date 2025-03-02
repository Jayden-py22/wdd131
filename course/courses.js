// courses.js

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
      { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" }
    ],
    
    setCourseInfo: function () {
      document.querySelector("#courseName").textContent = this.name;
      document.querySelector("#courseCode").textContent = this.code;
    },

    renderSections: function () {
      const html = this.sections.map(
        section => `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`
      ).join("");
      document.querySelector("#sections").innerHTML = html;
    },
  
    changeEnrollment: function (sectionNum, add = true) {
      const section = this.sections.find(sec => sec.sectionNum == sectionNum);
      if (section) {
        if (add) {
          section.enrolled++;
        } else if (section.enrolled > 0) {
          section.enrolled--;
        }
        this.renderSections();
      }
    }
  };
  
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, true);
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  
  aCourse.setCourseInfo();
  aCourse.renderSections();
  