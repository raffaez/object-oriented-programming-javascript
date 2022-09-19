import { Airplane } from "./Airplane";

const boeing = new Airplane({
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
console.log(`Your tank is at ${boeing.getFuel()}%.`);
boeing.planeInfo();