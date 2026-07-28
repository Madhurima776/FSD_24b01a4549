"use strict";
class Student {
    id;
    name;
    course;
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    display() {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
    }
}
let student = new Student(101, "Madhurima", "AI & DS");
student.display();
