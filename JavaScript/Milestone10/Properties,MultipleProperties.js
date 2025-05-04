const vehicle={};//empty object

Object.defineProperties(vehicle,{//using define property method we can create the multiple property with property attributes
    car:{
        value:{
        name:"audi",
        fuel:"petrol",
        color:"red"},
        writable:true, //this attributes controls the behavior property 
        enumerable:true
    },
    bike:{
        value:{
        name:"R15",
        fuel:"petrol",
        color:"blue"
        },
        writable:true,
        enumerable:true
    },
    sccoty:{
        value:{
        name:"honda",
        fuel:"petrol",
        color:"black"
        },
        writable:true,
        enumerable:true
    }
    
});
vehicle.car.name="bmw";

console.log(vehicle);//display the objects
