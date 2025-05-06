const url=require('url');// the url module is used for parsing the url
const http=require("http");

const server=http.createServer((req,res)=>{
    const URL=req.url;// requesting the url from the browser
    console.log(URL);
    const urlobj=url.parse(URL);//parsing url and making it as an object
    console.log(urlobj.path);//accessing the path property from the object
    if(urlobj.path=="/name")//based on the path the content will be changed
    {
        res.write("karthi");
    }
    else if(urlobj.path=="/login")
    {
        res.write("login page");
    }
    res.end();

});



server.listen(3000,()=>{
    console.log("server is listing in the port 3000");
})