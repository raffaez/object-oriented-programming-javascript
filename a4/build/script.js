"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var e1 = new Employee_1.Employee({ employeeName: 'Hannah Montana', department: 'Sales', salary: 1500 });
for (var i = 0; i < 30; i++) {
    e1.clockIn();
}
;
e1.getPaid();
e1.employeeInfo();
