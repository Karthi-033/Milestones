const date =new Date();
console.log(date.toLocaleString("en-US",{timeZone:"America/New_York"}));//This display the date and time of the perticular timezone
console.log(date.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}));
console.log(date.toLocaleString("en-JP",{timeZone:"Asia/Tokyo"}));
