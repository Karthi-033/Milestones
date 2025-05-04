//primitive
let a=10;
let b=a;
b=20;//change occured in variable b but not in variable a.
console.log(a+","+b);
//reference
let a1=[1,2,3,5,7,4,9];
let b1=a1;
b1[2]=10;
console.log("array one "+ a1 +",array two"+b1);//changes occured in both the array