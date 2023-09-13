//DEL 1
// file: /classes/person.js
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    toString() {
      return `Person ${this.name} (${this.age})`;
    }
  }
  
  module.exports = Person;

  ////////////
  // file: /classes/student.js
  class Student extends Person {
    constructor(name, age, grades) {
      super(name, age);
      this.grades = grades || [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverageGrade() {
      return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
  }
  
  module.exports = Student;

  ////////////////
  // file: /classes/teacher.js
  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
  }
  
  module.exports = Teacher;

//////////
// file: main.js
const { Person, Student, Teacher } = require('./classes');

const john = new Person('John Doe', 25);
const jane = new Student('Jane Doe', 20, [90, 80, 70]);
const sally = new Teacher('Sally Smith', 30, 'Math');

console.log(john);
console.log(jane);
console.log(sally);

console.log(jane.getAverageGrade());

/**
 * 
 * 
 */

//DEL 2
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    toString() {
      return `Person ${this.name} (${this.age})`;
    }
  
    isAdult() {
      return this.age >= 18;
    }
  }

  //////////

  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  }

  ///////////////

  //main.js:
const { Person, Student, Teacher } = require('./classes');

const john = new Student('John Doe', 20, [90, 80, 70]);
const sally = new Teacher('Sally Smith', 30, 'Math');

sally.addStudent(john);

console.log(sally.students);