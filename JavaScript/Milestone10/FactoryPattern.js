//Factory pattern

function vehicle(name,fuel,year)
{
   
    return{//creating object done here
        name:name,
        fuel:fuel,
        year:year
    }
    
}
const create1=vehicle("r15","petrol",2019);//The function  create and return the object without using new keyword
const create2=vehicle("ktm","petrol",2015);
console.log(create1);
console.log(create2);