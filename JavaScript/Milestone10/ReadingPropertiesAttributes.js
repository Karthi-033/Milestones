const vehicle={};

Object.defineProperties(vehicle,{//Multiple properties was defined 
    car:{
        value:{
        name:"audi",
        fuel:"petrol",
        color:"red"},
        writable:true,
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

const discriptor=Object.getOwnPropertyDescriptor(vehicle,"car");//This will return the attribute of the perticular property 
console.log(discriptor);
console.log(vehicle);
