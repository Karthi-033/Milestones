var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehical = /** @class */ (function () {
    function vehical() {
    }
    vehical.prototype.fuel = function () {
        console.log("The vehical can run in both petrol and diesel");
    };
    return vehical;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.fuel = function () {
        console.log("The car run in Diesel");
    };
    return car;
}(vehical));
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bike.prototype.fuel = function () {
        console.log("The bike run in Petrol");
    };
    return bike;
}(vehical));
var bk = new bike();
/* the function overRiding is the methode in the child class was
  present already in the parent class when the object created to the child class then
  the child class function only executed. */
bk.fuel();
