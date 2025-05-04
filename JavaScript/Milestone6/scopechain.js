// The scope chain is finding the variable in different scope and accessing it
let a="this is";//global scope
function person()
{
    let name="karthi";// person functional scope
    function age()
    {
        let age=21;//This is local scope
        console.log(a+" "+age+" "+name);
    }
    age();
}
person();