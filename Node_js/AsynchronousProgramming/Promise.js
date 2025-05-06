const fs=require("fs").promises;

fs.readFile("read.txt","utf8").then(//the then block will be executed if the file read happens 
    (data)=>{
        console.log(data);
    }
).catch(()=>{
    console.log("error");//if any error occured catch block will executed
})

console.log("This line will be printed first");

