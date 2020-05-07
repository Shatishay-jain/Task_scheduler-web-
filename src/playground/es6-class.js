
class Person {
    constructor(name='Anonyms',age=0){
        this.name=name;
        this.age=age;
    }
    getGretting()
    {
        return `hi i m ${this.name}`;
    }
    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old`;
    }
}
class Student extends Person{
   constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription()
    {
        let description = super.getDescription();
        if(this.hasMajor())
        description+=` and has a major ${this.major}`
        return description;
        
    }
    
  /*  getDescription()
    {
        return "zx";
    }*/
    
    
}
class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    hastr()
    {
        return !!this.location;
    }
    getGretting(){
    
        let opx = super.getGretting();
        if(this.hastr())
        {
            opx+=` and lives in ${this.location} `;
        }
        return opx;
    }
}
const me = new Traveller('SHATIHSYA JAIN', 20 ,'Meerut');
console.log(me.getGretting());
const other=new Traveller('rocki');
console.log(other.getGretting());