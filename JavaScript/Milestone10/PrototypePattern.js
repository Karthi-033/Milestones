//Thie is the example of prototype Pattern and combination of constructor and prototype pattern

function PTP(name,age){
    this.name=name;
    this.age=age;

}
PTP.prototype.display=function (){
    //The property which was defined by the prototype keyword will use shared memory when multiple object was created   
   console.log(this.name);
   return this.name;
};
const PTP1=new PTP('Karthi',21);
console.log(PTP1);
console.log(Object.getPrototypeOf(PTP1));