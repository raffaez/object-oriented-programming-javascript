"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electronic = void 0;
var Electronic = /** @class */ (function () {
    function Electronic(_a) {
        var deviceName = _a.deviceName, category = _a.category;
        this._volume = 100;
        this._isOn = false;
        this.deviceName = deviceName;
        this.category = category;
    }
    Electronic.prototype.turnOn = function () {
        var result;
        if (this.getIsOn()) {
            result = "".concat(this.deviceName, " is already on.");
        }
        else {
            this.setIsOn(true);
            result = "".concat(this.deviceName, " has been turned on.");
        }
        console.log(result);
    };
    Electronic.prototype.turnOff = function () {
        var result;
        if (!this.getIsOn()) {
            result = "".concat(this.deviceName, " is already off.");
        }
        else {
            this.setIsOn(false);
            result = "".concat(this.deviceName, " has been turned off.");
        }
        console.log(result);
    };
    Electronic.prototype.volumeUp = function () {
        var result;
        if (this.getIsOn()) {
            if (this.getVolume() >= 100) {
                result = "Device at max volume.";
            }
            else {
                this.setVolume(1);
                result = "++ Volume: ".concat(this.getVolume(), " ++");
            }
            console.log(result);
        }
    };
    Electronic.prototype.volumeDown = function () {
        var result;
        if (this.getIsOn) {
            if (this.getVolume() <= 0) {
                result = "Device at min volume.";
            }
            else {
                this.setVolume(2);
                result = "-- Volume: ".concat(this.getVolume(), " --");
            }
            console.log(result);
        }
    };
    Electronic.prototype.deviceInfo = function () {
        console.log('\n######### DEVICE INFO #########\n');
        console.log("Category: ".concat(this.category));
        console.log("Name: ".concat(this.deviceName));
        if (this.getIsOn()) {
            console.log("This device is on");
            console.log("Current volume: ".concat(this.getVolume()));
        }
        else {
            console.log("This device is off");
        }
    };
    Electronic.prototype.getIsOn = function () {
        return this._isOn;
    };
    Electronic.prototype.setIsOn = function (value) {
        this._isOn = value;
    };
    Electronic.prototype.getVolume = function () {
        return this._volume;
    };
    Electronic.prototype.setVolume = function (value) {
        switch (value) {
            case 1:
                this._volume += 20;
                break;
            case 2:
                this._volume -= 20;
                break;
        }
    };
    Object.defineProperty(Electronic.prototype, "deviceName", {
        get: function () {
            return this._deviceName;
        },
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    return Electronic;
}());
exports.Electronic = Electronic;
