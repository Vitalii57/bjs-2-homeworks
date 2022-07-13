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
  Student.prototype.addMarks = function (...rest) {
    if (this.marks === undefined) {
      this.marks = [...rest];
    } else {
      this.marks.push(...rest);
    }
  };
  // task_5
  Student.prototype.getAverage = function () {
    let sum = 0;
    let length = this.marks.length;
    for (let i = 0; i < length; i++) {
      sum += this.marks[i];
    }
    return sum / length;
  };
  // task_6
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
};
