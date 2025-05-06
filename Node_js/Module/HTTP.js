const http=require("http");// the http module is used to create the server

const server=http.createServer((req,res)=>{//creation of server
    const URL=req.url;//requesting url from the browser
    
    res.writeHead(200,{'Content-Type':'text/html'});//sending response  to the browser
    res.write(URL);
    res.write("<h1>Server is Running</h1>");
    res.end();
});


server.listen(3000,()=>{//assigning server to run on perticular port.
    console.log("Server is runnning in the port 3000"); 
})