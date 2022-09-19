interface NewEmployee{
    employeeName: string;
    department: string;
    salary: number;
}

export class Employee{
    private employeeName: string;
    private department: string;
    private salary: number;
    private daysWorked: number = 0;

    constructor({employeeName, department, salary}:NewEmployee){
        this.employeeName = employeeName;
        this.department = department;
        this.salary = salary;
    }
    
    public clockIn(){
        this.setDaysWorked(this.getDaysWorked()+1);
        console.log(`${this.employeeName} clocked in.`);
    }

    public getPaid(){
        if(this.getDaysWorked()>=30){
            console.log(`${this.employeeName} has been paid $${this.getSalary()}.`);
            this.setDaysWorked(0);
        }else{
            console.log(`${this.employeeName} has been working for less than a month and can't be paid yet.`);
        }
    }

    public employeeInfo(){
        console.log('\n########## EMPLOYEE INFO ##########\n');
        console.log(`Name: ${this.employeeName}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.getSalary()}`);
        console.log(`Clocked in ${this.getDaysWorked()} times.`);
    }

    public getSalary(): number {
        return this.salary;
    }
    public setSalary(value: number) {
        this.salary = value;
    }
    public getDaysWorked(): number {
        return this.daysWorked;
    }
    public setDaysWorked(value: number) {
        this.daysWorked = value;
    }
}