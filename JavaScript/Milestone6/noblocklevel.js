// var does not have the blocklevel scope .so, the variable declered inside the block can be accessed outside
if(true)
{
    var age=21;
    let name="karthi";
    console.log(age);
    console.log(name);
}
console.log(age);
//console.log(name); name cannot be accessed outside the block  because it was declared with let 