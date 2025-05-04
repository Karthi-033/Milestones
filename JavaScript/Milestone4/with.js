//with statement
const person={
    name:"karthi",
    age:21,
    city:"salem"
}

with(person)/*when the object was given as the parameter to the with statement, inside the block we can access the property of
that object without using the object name and .*/
{
    console.log("name:"+name+" age:"+age)
}