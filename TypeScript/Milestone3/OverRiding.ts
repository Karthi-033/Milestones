class vehical{
    fuel():void {
        console.log("The vehical can run in both petrol and diesel");
    }
}
class car extends vehical{
    fuel():void {
        console.log("The car run in Diesel");
    }
}
class bike extends vehical{
    fuel():void {
        console.log("The bike run in Petrol");
    }
}
const bk=new bike();
/* the function overRiding is the methode in the child class was
  present already in the parent class when the object created to the child class then
  the child class function only executed. */
bk.fuel();