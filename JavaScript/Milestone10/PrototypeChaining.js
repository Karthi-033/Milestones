//Prototype Chaining
//This is accessing the property of one Object from another object.
const parent1={
    name:"akash",
    age:30,
    print:function(){
        console.log(this.name+" "+this.age);
    }
}
const parent2=Object.create(parent1);//accessing the property of parent 1 object
parent2.age2= function (){
    console.log("parent2");
}
const child=Object.create(parent2);//accessing the property of parent 2 object
child.age3=function()
{
    console.log("child")
};
console.log(child.age); 
