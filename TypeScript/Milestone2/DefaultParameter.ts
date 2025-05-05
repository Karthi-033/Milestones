function DefaultParameter(name:string,dept:string="csd"):String{
     // when the function parameter not receive any value the defaulte value will be used 
    return(`I am ${name} from ${dept} `);
}
console.log(DefaultParameter("Karthi"));//default value was used
console.log(DefaultParameter("Ragul","CSE"));// value get changed

