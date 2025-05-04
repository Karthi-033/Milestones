//In this code the person object contains property ,in this iam printing name 
// from the object and addding company property in the object and then deleting the age and finally printing  the object

const person={
    name:"ragul",
    age:22,
    place:"erode"
}
console.log(person.name);
person.company="calibraint";// adding the property to the object
delete person.age;//removing the property
console.log(person);


