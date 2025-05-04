// The Synchronous Programming executes the code line by line

console.log("code starts here");
function busy()
{
    for(let i=0;i<100;i++)
    {
        console.log(i);
    }
}
busy();
console.log("code end here");