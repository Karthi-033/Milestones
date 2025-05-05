const person:{name:string,age:number,place:string}={ // creation of object in the TypeScript
    name:"karthi",
    age:21,
    place:"salem"
}
console.log(person);
person.place="erode";//only string need to be used to assign the perticular property.
console.log(person);

//Creating the object using inferedTyping
const student={
    name:"ragul",
    age:10,
    place:"erode"
}

console.log(typeof student.name);//return string