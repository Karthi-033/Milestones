var userdetails = /** @class */ (function () {
    function userdetails(FN, LN) {
        this.Firstname = FN;
        this.Lastname = LN;
        this.Fullname = FN + " " + LN;
    }
    return userdetails;
}());
var details = new userdetails("Ram", "Kumar");
console.log(details);
console.log(details.Fullname);
