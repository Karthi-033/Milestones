//dynamic property means changing the properties of the object

let person={
    name:"karthi",
    dept:"csd",
    college:"esec",
    place:"erode"
}

person.place="salem";//Here the place property value will be changed 
person.age=21;//This is adding new Property to the object.
delete person.college;//This will delete the property from the the object
console.log(person);