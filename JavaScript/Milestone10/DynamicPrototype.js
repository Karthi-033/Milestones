//Dynamic Prototype Pattern

function person(firstname,lastname)
{
    this.firstname=firstname;
    this.lastname=lastname;
    
    if(typeof this.fullname!=="function")
    {
        person.prototype.fullname=function(){
//if the fullname  function is  not present then new fullname prototype property will be created this is known as dynamic prototype pattern
            console.log(this.firstname+" "+this.lastname);
        }
    }
}

const person1 =new person("salem","karthi");
person1.fullname();
person.prototype.age=function(){
    console.log(12);
}
person1.age();
