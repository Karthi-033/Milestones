//instead of passing the function as parameter we can return the promise and using the then function we can access the value

function add(a,b)
{
    return new Promise((resolve)=>{
        let c=a+b;
        resolve(c);//This will return the value as promise
    });
}

add(2,3).then((e)=>{ //here we get the promise
    console.log(e);
})