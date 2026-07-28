class Student {
    static collegeName: string = "Shri Vishnu Engineering College for Women";

    constructor(public name: string) {}

    display(): void {
        console.log("Student Name:", this.name);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Madhurima");

student1.display();
Student.displayCollege();