class student
{
    public Firstname:string;
    protected  Lastname:string;
    private fullname:string;//The private and protected property cannot be accessed outside of the class  
    constructor(fn:string,ln:string)
    {
        this.fullname=fn+" "+ln;
        this.Firstname=fn;
        this.Lastname=ln;
    }

}

const stu1=new student("Dhinesh","kumar");
console.log(stu1);