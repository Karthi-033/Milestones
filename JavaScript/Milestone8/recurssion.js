// The function which call itself is known as recurssion

function fact(value)
{
    if(value==0)
    {
        return 1;
    }
    return value*fact(value-1);//here the function calls itself
}
console.log(fact(5));// this return the factorial of the number