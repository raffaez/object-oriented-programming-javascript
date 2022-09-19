"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(_a) {
        var clientName = _a.clientName, gender = _a.gender, dateOfBrith = _a.dateOfBrith, cpf = _a.cpf, phone = _a.phone, email = _a.email;
        this._purchases = [];
        this._clientName = clientName;
        this._gender = gender;
        this._dateOfBirth = dateOfBrith;
        this._cpf = cpf;
        this._phone = phone;
        this._email = email;
    }
    Client.prototype.purchase = function (item) {
        var pos = this.purchases.length;
        this._purchases[pos] = item;
        console.log("".concat(this.clientName, " has bought ").concat(item, "."));
    };
    Client.prototype.listPurchases = function () {
        console.log("\n".concat(this.clientName, "'s purchases:\n"));
        for (var i = 0; i < this.purchases.length; i++) {
            console.log("".concat(i + 1, ". ").concat(this.purchases[i]));
        }
    };
    Client.prototype.return = function (item) {
        var pos = item - 1;
        console.log("".concat(this.clientName, " has returned ").concat(this.purchases[pos]));
        this.purchases.splice(pos, 1);
    };
    Client.prototype.clientInfo = function () {
        console.log("\n######## CLIENT'S INFO ########\n");
        console.log("Name: ".concat(this.clientName));
        console.log("Gender: ".concat(this.gender));
        console.log("Birthday: ".concat(this.dateOfBirth));
        console.log("CPF: ".concat(this.cpf));
        console.log("Phone: ".concat(this.phone));
        console.log("Email: ".concat(this.email));
    };
    Object.defineProperty(Client.prototype, "clientName", {
        get: function () {
            return this._clientName;
        },
        set: function (value) {
            this._clientName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "purchases", {
        get: function () {
            return this._purchases;
        },
        set: function (value) {
            this._purchases = value;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
