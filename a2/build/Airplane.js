"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
var Airplane = /** @class */ (function () {
    function Airplane(_a) {
        var model = _a.model, color = _a.color, pilotName = _a.pilotName, seats = _a.seats;
        this._fuel = 0;
        this._isFlying = false;
        this.model = model;
        this.color = color;
        this.pilotName = pilotName;
        this.seats = seats;
    }
    Airplane.prototype.fillUp = function () {
        if (this.getFuel() < 100) {
            this.setFuel(2, 100);
            console.log('You tank has been filled up.');
        }
        else {
            console.log('Your tank is already full.');
        }
    };
    Airplane.prototype.takeOff = function (value) {
        var result;
        if (this.getIsFlying()) {
            result = 'This plane is already up in the air!';
        }
        else {
            switch (value) {
                case 1:
                    if (this.getFuel() >= 80) {
                        result = "A ".concat(this.color, " ").concat(this.model, " plane piloted by ").concat(this.pilotName, " just took off to a long flight!");
                        this.setFuel(1, 80);
                    }
                    else {
                        result = "You don't have enough fuel for this. Fill up!";
                    }
                    break;
                case 2:
                    if (this.getFuel() >= 60) {
                        result = "A ".concat(this.color, " ").concat(this.model, " plane piloted by ").concat(this.pilotName, " just took off to a medium flight!");
                        this.setFuel(1, 60);
                    }
                    else {
                        result = "You don't have enough fuel for this. Fill up!";
                    }
                    break;
                case 3:
                    if (this.getFuel() >= 40) {
                        result = "A ".concat(this.color, " ").concat(this.model, " plane piloted by ").concat(this.pilotName, " just took off to a short flight!");
                        this.setFuel(1, 40);
                    }
                    else {
                        result = "You don't have enough fuel for this. Fill up!";
                    }
                    break;
                default:
                    result = "No can do. Try again.";
            }
        }
        if (result != "You don't have enough fuel for this. Fill up!" && result != 'No can do. Try again.') {
            this.setIsFlying(true);
        }
        console.log(result);
    };
    Airplane.prototype.land = function () {
        var result;
        if (!this.getIsFlying()) {
            result = 'This plane is already on the ground!';
        }
        else {
            result = "The ".concat(this.color, " ").concat(this.model, " plane piloted by ").concat(this.pilotName, " is landing!");
            this.setIsFlying(false);
        }
        console.log(result);
    };
    Airplane.prototype.planeInfo = function () {
        console.log('\n########### PLANE INFO ###########\n');
        console.log("Airplane model: ".concat(this.model));
        console.log("Color: ".concat(this.color));
        console.log("Pilot: ".concat(this.pilotName));
        console.log("Seats: ".concat(this.seats));
        console.log("Fuel level: ".concat(this.getFuel(), "%"));
        console.log("State: ".concat(this.getIsFlying() ? 'flying' : 'on the ground'));
    };
    Airplane.prototype.getIsFlying = function () {
        return this._isFlying;
    };
    Airplane.prototype.setIsFlying = function (value) {
        this._isFlying = value;
    };
    Airplane.prototype.getFuel = function () {
        return this._fuel;
    };
    Airplane.prototype.setFuel = function (op, value) {
        switch (op) {
            case 1:
                this._fuel -= value;
                break;
            case 2:
                this._fuel = value;
                break;
        }
    };
    Object.defineProperty(Airplane.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "pilotName", {
        get: function () {
            return this._pilotName;
        },
        set: function (value) {
            this._pilotName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "seats", {
        get: function () {
            return this._seats;
        },
        set: function (value) {
            this._seats = value;
        },
        enumerable: false,
        configurable: true
    });
    return Airplane;
}());
exports.Airplane = Airplane;
