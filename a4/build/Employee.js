"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(_a) {
        var employeeName = _a.employeeName, department = _a.department, salary = _a.salary;
        this.daysWorked = 0;
        this.employeeName = employeeName;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.clockIn = function () {
        this.setDaysWorked(this.getDaysWorked() + 1);
        console.log("".concat(this.employeeName, " clocked in."));
    };
    Employee.prototype.getPaid = function () {
        if (this.getDaysWorked() >= 30) {
            console.log("".concat(this.employeeName, " has been paid $").concat(this.getSalary(), "."));
            this.setDaysWorked(0);
        }
        else {
            console.log("".concat(this.employeeName, " has been working for less than a month and can't be paid yet."));
        }
    };
    Employee.prototype.employeeInfo = function () {
        console.log('\n########## EMPLOYEE INFO ##########\n');
        console.log("Name: ".concat(this.employeeName));
        console.log("Department: ".concat(this.department));
        console.log("Salary: $".concat(this.getSalary()));
        console.log("Clocked in ".concat(this.getDaysWorked(), " times."));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (value) {
        this.salary = value;
    };
    Employee.prototype.getDaysWorked = function () {
        return this.daysWorked;
    };
    Employee.prototype.setDaysWorked = function (value) {
        this.daysWorked = value;
    };
    return Employee;
}());
exports.Employee = Employee;
