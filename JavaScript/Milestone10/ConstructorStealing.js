//Constructor Stealing 

function Main()
{
    this.number=[10,20];
    
}
function Steal()
{
    Main.call(this);//This copy all the property from the main constructor
}
const s1=new Steal();
const s2=new Steal();
console.log(s1);
s2.number.push(30);//
console.log(s2);