class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayEmployee(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

let emp = new Employee("John", 50000, "IT");

console.log(emp.name);
// console.log(emp.salary);      // Error (private)
// console.log(emp.department);  // Error (protected)

emp.displayEmployee();

let mgr = new Manager("David", 70000, "HR");
mgr.showDepartment();