class userdetails  //The class in TypeScript helps in the creation of blueprint for the object
{
    Firstname:string;
    Lastname:string;
    Fullname:string;
    constructor(FN:string,LN:string)
    {
        this.Firstname=FN;
        this.Lastname=LN;
        this.Fullname=FN+" "+LN;
    }
}

const details= new userdetails("Ram","Kumar");
 console.log(details);
 console.log(details.Fullname);//prints full name