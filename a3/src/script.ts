import { Electronic  } from "./Electronic";

const tv = new Electronic({
    deviceName: 'SmartTV',
    category: 'TV'
});
tv.turnOn();
tv.volumeDown();
tv.volumeUp();
tv.volumeUp();
tv.turnOff();
tv.deviceInfo();