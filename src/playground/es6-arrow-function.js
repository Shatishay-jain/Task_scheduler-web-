/*const sqaure=function(x){
    return x*x;
};
const sqaureArrow=(x)=>{
    return x*x;
};
console.log(sqaureArrow(90));
const getFN = (x) =>  x.split(' ')[0];
console.log(getFN('shatishay jain'));*/
const user={
    name:'Shatihsay ',
    cities:['Meerut','Jaipur'],
    print() {   return this.cities.map((city) => this.name+'has lived'+city )}
};
console.log(user.print());
const us={
    number:[24,32],
    multiply:32,
    print1(){
        return this.number.map((numbe)=>numbe+ ' is multiplied by' +this.multiply + 'and hives the result as ' + numbe*this.multiply)
    }
};
console.log(us.print1());