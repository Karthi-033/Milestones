interface person{
   readonly name:string, //the interface is also same like type definition  but it hold some additional property 
   // When we use readonly properties the perticular property only readed can't be written  
    age:number,
    dept:string
}
interface  mark extends person{ //The interface  can be extended to another interface also
    mark:number;
}

const p1:mark={
    name:"elango",
    age:20,
    dept:"csd",
    mark:100
}

console.log(p1.name);
