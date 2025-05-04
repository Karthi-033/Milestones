//Conditional statements
let a=2,b=10;
if(a>b) // if the condition was true then this block will be executed
{
    console.log(a+" is greater than "+b);
}
else if(a<b) /*if the condition fail in the if block then else if condition will be evauated if it becom true 
 then else if block will be executed*/
{
    console.log(b+" is greater than "+a);
}
else //if all conditions fail in the previous block then else block will be executed
{
    console.log("both are equal");
}