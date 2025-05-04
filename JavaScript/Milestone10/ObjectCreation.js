function person(name,dept,age)//The Creation of object can also using function
{
    this.name=name;
    this.dept=dept;
    this.age=age;
}
const value=new person("karthi","csd",21);
console.log(value.name);


const a={};
const obj=Object.create(a);//Using create method the object can be created 
obj.name="karthi";
obj.age=21;
console.log(obj);
console.log(a);