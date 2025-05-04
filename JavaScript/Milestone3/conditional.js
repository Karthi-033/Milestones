let a;
let b=(a=2,a++,a*2);//the comma operator will evaluate all the values from beginning to end and then return last expression
console.log(b);//4

//conditional operator
let age=18;
console.log(age>=18? "you can vote" : "you can't vote");//in this if the condition was true the statement before the colan 
//will be printed else it print statement after the colan.