const fs=require("fs");
const http=require("http");
//Writing the File
fs.writeFile("Write.txt","This is the text file tht was written by the File.js file ",(err)=>{//writing the file or creating the file
if(err)
{
    console.log("error");
}
console.log("file written successfully");
});

//FileOpen
fs.open('Write.txt',"r",(err)=>{// opening the file and mentioning the file to open in read mode or write mode
  if (err) throw err;
  console.log("The file is opened");
});

//FileAppend
fs.appendFile("Write.txt",'The file get appened',(err)=>{
  if (err) throw err;
  console.log(" The file appended ");
});



//Reading the file
const server=http.createServer((req,res)=>{
      fs.readFile('display.html',(err,data)=>{//reading the file and displaying in the browser
        if(err) throw err;
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
      })
});

server.listen(3000,()=>{
    console.log("Server running in the port 3000");
})