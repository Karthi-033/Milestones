const fs=require("fs").promises;

 async function readfile(){
 
    const data= await fs.readFile("read.txt");// The execution will be paused until the file read complete
 
}

readfile().then(()=>{
    console.log("executed");//executed if reading complete
}).catch(()=>{
    console.log("error");//executed if error in reading
})
