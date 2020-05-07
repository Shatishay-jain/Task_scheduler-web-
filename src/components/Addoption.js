import React from 'react';
export default class Addoption extends React.Component{
    state={
        error:undefined
    };
    
    AddOptionEx=(e)=>{
        e.preventDefault();
        //console.log('ssss');
        const optio =e.target.elements.options.value.trim();
        const error = this.props.AddOptionEx(optio);
        this.setState(()=>({
          error:error})
                
            
        );
        if(!error)
        {
            e.target.elements.options.value="";
        }
          // this.props.AddOptionEx(optio);
        
    };
    render(){
        return(
            <div>
            {this.state.error&&<p className="add-option-error">{this.state.error}</p>}
                <form className="add-option"  onSubmit={this.AddOptionEx}>
                    <input className="add-option-content" type="text"  name="options"/>
                    <button className="button" >Addoption</button>
                </form>
            </div>
        )
    }
}