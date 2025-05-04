//for loop used for iterating up to the condittion fails
for(let i=0;i<10;i++)
    {
        
        if(i==5)
        {
            continue;//this will move to beginning of the loop and rest of the code below will not be executed
        }
        console.log(i);
    }



    //do while loop
    console.log("do while");
    
    let i=0;
    do{     // in this the do block will be first executed and then based on the condition the loop will iterate
        console.log(i);
        i++;
    }while(i!=5)
    


// while loop 
    console.log("while");
     let a=0;
        while(true) //if the condition was true the loop will be executed 
        {
         a++;
         console.log(a);
         if(a==7)
         {
            break;//the loop break and program exit from the loop
         }
        }


  console.log("for in loop");      
  let person=[2,3,4,7,5,6];
  for(i in person)// In  this the i will return the index one by one from the person array
  {
    console.log(person[i]);//by the index the value from the person will be accessed
  }