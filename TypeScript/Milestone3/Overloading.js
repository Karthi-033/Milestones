function Add(a, b, c, d) {
    if (c == undefined && d == undefined) {
        return a + b;
    }
    else if (d == undefined) {
        return a + b + c;
    }
    else {
        return a + b + c + d;
    }
}
console.log(Add(1, 2, 3));
console.log(Add(1, 2));
console.log(Add(1, 2, 3, 4));
