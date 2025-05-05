type marks={
    [key:string]:number;
    // Keeping the key as the string  and value as the number the  dynamically adding of properties can be done

}

const m1:marks={
    "karthi":100,
    "dhinesh":100,
    "elango":99,
}
console.log(m1);
m1.gokul=98;
console.log(m1);//prints the object