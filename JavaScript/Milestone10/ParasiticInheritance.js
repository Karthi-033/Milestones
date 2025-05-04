function create(cmd)
{
    const obj=Object.create(cmd);//The object is inherited and stored in obj

    obj.displ=function(){
        console.log("this is wraped");
    }
    return obj;//The  object is returned 
}
const value={
    name:"karthi"
}
const obj=create(value);//passing value as argument
obj.displ();
console.log(obj.name);