//Durable Constructor
function person(name,age)
{
    const obj={};
    obj.print=function(){
        console.log(name+" "+age);
//In The durable constructor name and age cannot be accesed because they are private and we are not expossing them
    }
    return obj;
}
const p1=person("karthi",21);

p1.print();

