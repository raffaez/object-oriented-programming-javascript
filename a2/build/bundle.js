var Airplane = /** @class */ (function () {
    function Airplane() {
        this._fuel = 0;
        this._isFlying = false;
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
    return Airplane;
}());
var boeing = new Airplane();
boeing.model = 'Boeing 767';
boeing.color = 'white';
boeing.pilotName = 'Amelia Earhart';
boeing.fillUp();
boeing.takeOff(2);
boeing.land();
boeing.takeOff(1);
boeing.fillUp();
boeing.takeOff(1);
console.log("Your tank is at ".concat(boeing.getFuel(), "%."));
boeing.planeInfo();
