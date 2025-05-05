var student = /** @class */ (function () {
    function student(fn, ln) {
        this.fullname = fn + " " + ln;
        this.Firstname = fn;
        this.Lastname = ln;
    }
    return student;
}());
var stu1 = new student("Dhinesh", "kumar");
console.log(stu1);
