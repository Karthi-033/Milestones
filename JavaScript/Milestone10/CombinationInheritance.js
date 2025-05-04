//combination constructor

function animal(name) {
    this.name = name;
  }
  animal.prototype.speak = function() {
    console.log(this.name);
  };
  
  function dog(name, breed) {
    animal.call(this, name);  //Constructor stealing
    this.breed = breed;      
  }
  dog.prototype = Object.create(animal.prototype);
  dog.prototype.constructor = dog;
  
  
  dog.prototype.bark = function() {
    console.log(this.name);
  };
  
  
  const dog1 = new dog("tomy", "germansheperd");
  
  dog1.speak();  
  dog1.bark();   
  
  
  