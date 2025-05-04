const dt1=new Date();
const dt2=new Date();
//we can't compare two dates directly because the variation in the memory location.

if(dt1.getTime()==dt2.getTime())
{
    console.log("it's present");//this will be executed , were  we compare both of the time only
}
else if(dt1>dt2)
{
    console.log("its future");
}
else 
{
    console.log("its past");
}

