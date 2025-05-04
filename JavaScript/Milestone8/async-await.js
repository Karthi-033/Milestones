function loop()
{ return new Promise((resolve)=>{setTimeout(()=>{
    for(let i=0;i<10;i++)
    {
        console.log(i);
    }
    resolve();
},2000);})

    
}
//The async function will return the promise  and then await will wait for the promise  ,it will make the code synchronous
const display = async ()=>{
    console.log("start execution");
    await loop();//The code will wait for the promise from the async function 
    console.log("executed");
}
display();