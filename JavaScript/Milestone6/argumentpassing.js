// In this code the argument was passed to the function 

function cars(name) // after function call the  argument will be set to this parameter.
{
    if(name=="bmw")
    {
        console.log("I have a bmw");
    }
    else{
        console.log("I have a lambo");
    }
    
}

cars("bmw");//The argument will be passed to the car function
cars("lambo");