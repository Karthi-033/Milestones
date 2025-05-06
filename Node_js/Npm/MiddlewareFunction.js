const express=require("express");
const app=express();

function checkpass(req,res,next)
// when the password entered in the browser url  that will be checked here by the checkpass function 
{
    if(req.query.pass=="12345")//iif the pass word was true, the next function will move to the next response function
    {
        next();
    }
    else{
       //this return wrong entry in the Browser
        res.write("wrong entry");
        res.end();
    }
}
app.get("/pass",checkpass,(req,res)=>{
res.write("Correct Password");
res.end();
});

app.listen(3000,()=>{
    console.log("server is running in the port 3000");
})