
function nameAge(name:string,age?:number):String// In this the ? represents the optional parameter,the value may come or maynot come 
{
   if(age!=undefined)
   {
console.log(`I am ${name} ,${age} Years old`);

return name;// returns only string value
   }
   else{
       return name;
   }
 
}

nameAge("karthi",21);