const date=new Date();
const epochtime=date.getTime();
console.log(epochtime);// The epoch time is time from 1970 to until now will be calculated in milliseconds
const dt=new Date(epochtime)
console.log(dt.toString());//The epoch time will be converted into actual readable time