//Currying function

function add(a) /* insted of using multiple parameters in the function we can use single parameter
 in the function and we can return another function with parameter*/
{
    return function(b)
    {
        return a+b;
    }
}

console.log(add(5)(2));/* we can also directly pass the parameter for the function 
in the return statement or we can assign to a variable and we can access*/
const value=add(5);
console.log(value(2));