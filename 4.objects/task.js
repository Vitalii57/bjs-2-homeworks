// task_1
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
// task_2
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
// task_3
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
  // task_4
  Student.prototype.addMarks = function (...mark) {
    this.marks = [mark];
  };
  // task_5
  Student.prototype.getAverage = function (...element) {
    let sum = 0;
    console.log(
      element.map((i) => (sum += i), sum).reverse()[0] / element.length
    );
  };
  // task_6
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
};
