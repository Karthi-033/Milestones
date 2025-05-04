//callback function is passing the function as an argument to another function

function display(value,callback)
{
    console.log(value);
    callback();
}
display(200,()=>{//this function will be passed as an argument to display function
    console.log("success status");
});