
//Inheritance
class name
{
    fullname()
    {
        console.log("karthi");
    }
}
class age extends name //name class property can be accessed with in the ag class
{
    ages()
    {
        console.log(21);
    }
}
class details extends  age// age class property canbe accessed  whit in the details class
{
    display()
    {
        console.log("this are the details");
        }
}
const det=new details();//creating object for the details class  by this we can access age , name class property
det.fullname();
det.ages();
det.display()