class Student {
    constructor(
        public id: number,
        public name: string,
        public course: string
    ) {}

    display(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
    }
}

let student = new Student(101, "Madhurima", "AI & DS");

student.display();