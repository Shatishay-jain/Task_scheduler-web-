import React from 'react';
import ReactDOM from'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout=(props)=>{
    return(
        <div>
            <p>Header</p>
            {props.children}
        </div>
    );
}
const template = (
    <div>
        <p>this is my page</p>
        <h1>yes</h1>
    </div>
);



/*const User=function(props){
    return(
        <p>Name:{props.name}</p>
    );
}*/
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
/*class OldSyntax{
    constructor()
    {
        this.name = 'sasss';
        this.getGretting=this.getGretting.bind(this);
        
    }
    getGretting(){
        return `hi,my name is ${this.name}`;
    }
    
}
const old = new OldSyntax();
const xxx = old.getGretting; 
console.log(xxx());
class NewSyntrax{
    name= 'aa';
    GET=()=>{
        return `hi i m ${this.name}`;
    }
}
const new1=new NewSyntrax();
const cc=new1.GET;

console.log(cc());
//we can use class bases and stateless function together but statless fuction is used only where there is no states




//import './utils.js';
/*import { y, add }  from './utils.js';
console.log('appg.js is running');
console.log(y(3));
console.log(add(2,3));
import x , { isAdult , canDrink } from './person.js';
console.log(isAdult(12));
console.log(canDrink(29));
console.log(x(70));
import validator from 'validator';
console.log(validator.isEmail('a@yahoo.com'));*/