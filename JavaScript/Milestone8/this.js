//The this keyword is used to  access the object property 

const person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    fullname : function() {
      console.log( this.firstName+""+this.lastName);// here this refers to the object person 
    }
  };
  person.fullname();