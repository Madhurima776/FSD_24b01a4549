"use strict";
class Student {
    studentId;
    name;
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
    }
}
let student = new Student(101, "Madhurima");
student.display();
// student.studentId = 102; // Error: Cannot assign to 'studentId' because it is a read-only property.
