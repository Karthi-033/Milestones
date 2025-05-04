const dt=new Date();
console.log(dt.toDateString());//extract date
console.log(dt.toString());//gives the  date and time 
console.log(dt.toTimeString());//extract the time in string  
console.log(dt.toLocaleString());//gives the date and time in the local format
console.log(dt.toLocaleString("en-US"));//gives the date in the  US format
console.log(dt.toLocaleString("en-GB"));//gives the date and time in the global format
console.log(dt.toLocaleTimeString("en-US"));//gives the time in US local format
console.log(dt.toLocaleDateString("en-US"));//gives the Date in US local format