//The AsynchronousProgramming will not wait for any task if the task takes time then it moves to the next task

console.log(" code Start");

setTimeout(() => {
  for(let i=0;i<10;i++)
  {
      console.log("hello");
  }
}, 3000); //This block will execute after 3 second so this executes last

console.log(" code End");
