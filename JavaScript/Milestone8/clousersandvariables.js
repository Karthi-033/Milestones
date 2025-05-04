//The function  which return another another function  

function count ()
{
    let inc=0;
    
    return function incount()
    {
       console.log(inc++);
    }
}

const value=count();/*The retuned function  will be stored in the variable  so by using that variable
  we can directly access inner function and outer function variable through the inner function without accessing outer function */
value();
value();
value();