class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }
  get level() {
        if (this.credits > 90){
          return 'Senior'
      } else if (this.credits > 60 && this.credits <= 90) {
        return 'Junior' 
      } else if (this.credits > 30 && this.credits <= 60) {
        return 'Sophmore'
      } else {
        return 'Freshman'
      }
  }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student1 = new Student(3.9, 91);      // sen
const student2 = new Student(3.9, 70);      // jun
const student3 = new Student(3.9, 60);      // soph
const student4 = new Student(3.9, 50);      // soph
const student5 = new Student(3.9, 20);      // fr

console.log(student1.level)
console.log(student2.level)
console.log(student3.level)
console.log(student4.level)
console.log(student5.level)