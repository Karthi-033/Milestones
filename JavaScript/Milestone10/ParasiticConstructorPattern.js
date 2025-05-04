//Parasitic Constructor pattern.

function Person(name,age)//This constructor create and return the object 
{
    const obj={};  
    obj.name=name;
    obj.age=age;
    obj.print=function(){
        console.log(name+" "+age);
    }
    return obj;
}
const p1= new Person("karthi",21);

p1.print();
console.log(p1.name);
