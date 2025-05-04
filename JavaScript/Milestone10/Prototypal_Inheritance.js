
//Prototypal_inheritance
const parent=
{
    name:"karthi",
    age:21
}
const obj1=Object.create(parent);//This inherit parent object to obj1
obj1.place="salem";

console.log(obj1.place);