//callback hell is passing the function as an argument in the nested way

function name(callback)
{
    console.log("1st call back");//execute first
    callback();
}
function firstname(callback)
{
    console.log("2nd call back");//execute second
    callback();
}
function lastname(callback)
{
    console.log("final one");//execute third
    callback();
}

name(()=>{
    firstname(()=>{
        lastname(()=>{
            console.log("completed");//execute last
        })
    })
})