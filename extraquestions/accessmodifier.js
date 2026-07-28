"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayEmployee() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
class Manager extends Employee {
    showDepartment() {
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
