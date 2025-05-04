//The promise will  be used in the asynchronous program to either fetch data or to do time based operation 

function voting(age)
{
    return new Promise((resolve,reject)=>{
        if(age>18)
        {
            resolve("you can vote");//if success resolve will be returned and accessed by then
        }
        else{
            reject("you can't vote");//if fails then reject will be returned and accessed by catch
        }
    })
}

voting(12).then((e)=>{
    console.log(e);
}).catch((e)=>{
console.log(e);
})