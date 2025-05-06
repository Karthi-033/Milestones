const express =require("express");// the express is the framework to make the server,routing,creating api. 
 const app=express();

app.get("/",(req,res)=>{
    res.write(`hit "/register" in the URL to navigate to register page`);//get request from the browser
    res.end();
})

 app.get("/register",(req,res)=>{ //get request from the browser
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Register Page</h1><br>");
    res.write("<lable>Name : </lable>");
    res.write(`<input type="text"><br>`);
    res.write("<lable>Password : </lable>");
    res.write(`<input type="text"><br>`);
    res.write("<lable>confirm Password : </lable>");
    res.write(`<input type="text"><br>`);
    res.write("<lable>Email: </lable>");
    res.write(`<input type="email"><br>`);  
    res.write("<button>Submit</button>");
    res.end();

 });

app.listen(3000,()=>{
    console.log("express server is running in the port 3000");
})
