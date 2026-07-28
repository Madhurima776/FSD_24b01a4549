"use strict";
class Student {
    name;
    static collegeName = "Shri Vishnu Engineering College for Women";
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
    }
    static displayCollege() {
        console.log("College Name:", Student.collegeName);
    }
}
let student1 = new Student("Madhurima");
student1.display();
Student.displayCollege();
