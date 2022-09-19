"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airplane_1 = require("./Airplane");
var boeing = new Airplane_1.Airplane({
    model: 'Boeing 767',
    color: 'white',
    pilotName: 'Jared',
    seats: 160
});
boeing.fillUp();
boeing.takeOff(2);
boeing.land();
boeing.takeOff(1);
boeing.fillUp();
boeing.takeOff(1);
console.log("Your tank is at ".concat(boeing.getFuel(), "%."));
boeing.planeInfo();
