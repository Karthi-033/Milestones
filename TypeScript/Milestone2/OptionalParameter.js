function nameAge(name, age) {
    if (age != undefined) {
        console.log("I am ".concat(name, " ,").concat(age, " Years old"));
        return name; // returns only string value
    }
    else {
        return name;
    }
}
nameAge("karthi", 21);
