const fs=require("fs");

fs.readFile("read.txt",(err , data)=>{
    //The file reading will takes time so Asynchronous Programming will move to the next line and execute this in last
 if(err) throw err;
 console.log(data);
});
//Due to Asynchronous Programming this line will be executed first 
console.log("This will be printed first"); 