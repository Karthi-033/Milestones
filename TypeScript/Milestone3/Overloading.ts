function  Add(a:number,b:number,c?:number,d?:number):number // using Optional parameter the function overloading is done
{
    if(c==undefined&&d==undefined)
    {
        return a+b;
    }
    else if(d==undefined)
    {
        return a+b+c;
    }
    else {
        return a+b+c+d;
    }
}
console.log(Add(1,2,3));// output-> 6
console.log(Add(1,2));//output->3
console.log(Add(1,2,3,4));//output->10