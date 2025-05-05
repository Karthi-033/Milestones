function DefaultParameter(name, dept) {
    if (dept === void 0) { dept = "csd"; }
    return ("I am ".concat(name, " from ").concat(dept, " "));
}
console.log(DefaultParameter("Karthi"));
console.log(DefaultParameter("Ragul", "CSE"));
