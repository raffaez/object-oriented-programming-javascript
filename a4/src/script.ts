import { Employee } from "./Employee";

const e1: Employee = new Employee({employeeName:'Hannah Montana', department:'Sales', salary:1500});
for(let i:number=0;i<30;i++){e1.clockIn()};
e1.getPaid();
e1.employeeInfo();