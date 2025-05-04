//function over loading was not supported by javascript 

function add(a,b)
{
    return a+b;
}
function add(a,b,c)
{
    return a+b+c;
}
function add(a,b,c,d)// This function will overwrite previous function 
{
    return a+b+c+d;
}

console.log(add(1,4,3,5));