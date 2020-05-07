import React from 'react';
import Addoption from './Addoption';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
    state={
        objects:[] ,
        selectedOption : undefined
        
        };
  

    deleteSelectedOption=()=>{
        this.setState(()=>({
            selectedOption : undefined
        }));
    };
    handleDeleteOptions=()=>{
        
        
        this.setState(()=>({objects:[]}));
    };
   handleDeleteOption=(option)=>{
        this.setState( (prevstate) => ({
            objects: prevstate.objects.filter((object)=> option!==object)
               
           
        }));
    };
    
    handlePick=()=>{
        const randnum=Math.floor(Math.random()*this.state.objects.length);
        this.setState ((prevstate)=>({
            selectedOption : this.state.objects[randnum]

        }));
       // alert(this.state.objects[randnum]);        
    };
    AddOptionEx=(objects)=> {
        if(!objects)
        return 'Enter a valid string';
        else if(this.state.objects.indexOf(objects)>-1)
        return 'Duplicate string';
      
            this.setState((prevstate)=>
            {
                return{
                    objects: prevstate.objects.concat([objects])
                };
            });
        
    };
    render(){
        
        const subtitle='!!put your life in the hands of the computer';
        
        return(
            <div>
            <Header subtitle={subtitle}/>
            <div className ="container">
           <div className="widget" >
                <Action hasobject={this.state.objects.length>0 } handlePick={this.handlePick}/>
                <Options 
                    objects={this.state.objects}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
            </div>
            <Addoption AddOptionEx={this.AddOptionEx}/>
            </div>
            
            <OptionModal 
                selectedOption = {this.state.selectedOption}
                deleteSelectedOption ={this.deleteSelectedOption}
                handleDeleteOption = {this.handleDeleteOption}
            />
            </div>
        );
    }
    componentDidMount(){
        try{
        const json= localStorage.getItem('objects');
        const objects=JSON.parse(json);
        if(objects){
        this.setState(()=>({objects}));
        }}
        catch(e){

        }
    }
    componentDidUpdate(prevprops,prevstate){
        if(prevstate.objects.length!==this.state.objects.length){
        //console.log("saving data");
        const json=JSON.stringify(this.state.objects);
       localStorage.setItem('objects',json);
    }

    }
    componentWillUnmount(){
        console.log('unmount data');
    }
}
