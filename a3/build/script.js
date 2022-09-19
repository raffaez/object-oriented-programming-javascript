"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Electronic_1 = require("./Electronic");
var tv = new Electronic_1.Electronic({
    deviceName: 'SmartTV',
    category: 'TV'
});
tv.turnOn();
tv.volumeDown();
tv.volumeUp();
tv.volumeUp();
tv.turnOff();
tv.deviceInfo();
