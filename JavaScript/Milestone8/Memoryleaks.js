//memory leaks 

function out()
{
 a=new Array(100).fill("hello");/*here the memory leaks happens due the arraycontains 100's of hello 
    and stored in the variable a   were this lead to memory leaks*/
    return ()=>{
        console.log(a);
    }

}

let value=out();
value();
console.log(a);