function add(a,b)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let c=a+b;
            resolve(c);
        },2000);
    })
}

async function fetch()
{
    const value=await add(3,4);
    console.log(value);
}
fetch();