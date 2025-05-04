//copying values from one variable to another variable will be done by directly assigining the value to another variable

const dept="csd";
let  newdept=dept;//value copied
console.log(newdept);

// copying object
const details={
    firstname:"karthi",
    age:21,
    place:"salem"
}
let a=details;//the values will be changed  in the orginal object 
let person=Object.assign({},details);/*by using this function the object can be copied and changing 
 values happen only in person not the orginal object */
console.log(a);
console.log(person);