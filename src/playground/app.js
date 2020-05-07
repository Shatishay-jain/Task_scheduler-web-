class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.AddOptionEx=this.AddOptionEx.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        
        this.state= {
        objects:[]
        
        };

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
    handleDeleteOptions(){
        
        
        this.setState(()=>({objects:[]}));
    }
   handleDeleteOption(option){
        this.setState( (prevstate) => ({
            objects: prevstate.objects.filter((object)=> option!==object)
               
           
        }));
    }
    
    handlePick(){
        const randnum=Math.floor(Math.random()*this.state.objects.length);
    
    alert(this.state.objects[randnum]);
       
    
        
    }
    AddOptionEx(objects) {
        if(!objects)
        return 'enter a valid string';
        else if(this.state.objects.indexOf(objects)>-1)
        return 'Duplicate srrng';
      
            this.setState((prevstate)=>
            {
                return{
                    objects: prevstate.objects.concat([objects])
                };
            });
        
    }
    render(){
        
        const subtitle='!!put your life in the hands of the computer';
        
        return(
            <div>
            <Header subtitle={subtitle}/>
            <Action hasobject={this.state.objects.length>0 } handlePick={this.handlePick}/>
            <Options 
                objects={this.state.objects}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <Addoption AddOptionEx={this.AddOptionEx}/>
            </div>
        );
    }
}

const Header=(props)=>{
    return ( 
        <div>
             <h1>{props.title}</h1>
             {props.subtitle&&<h1>{props.subtitle}</h1>}
         </div>
     );
};
Header.defaultProps={
    title:'Indecision1'
};
const Action=function(props){
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasobject}

            >
            where should i go
            </button>
        </div>
    );
};
const Options=(props)=>{
    return (
        <div>
            
        <p><button onClick={props.handleDeleteOptions}>RemoveAll</button></p>
        {props.objects.length===0&&<p>please add someting to get started</p>}
            {
                props.objects.map((options)=>(
                    <Option 
                    key={options} optionText={options}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            
            
        </div>
    );
};
const Option=(props)=>{
    return(
        <div>
           {props.optionText}
           <button 
           onClick={(e) => {
               props.handleDeleteOption(props.optionText);
           }
        }
           >Remove</button> 
           
        </div>
    );
};

class Addoption extends React.Component{
    constructor(props)
    {
        super(props);
        this.AddOptionEx=this.AddOptionEx.bind(this);
       this.state= {
            error:undefined
        } ;
    }
    AddOptionEx(e){
        e.preventDefault();
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
        
    }
    render(){
        return(
            <div>
            {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.AddOptionEx}>
                    <input type="text"  name="options"/>
                    <button>Addon</button>
                </form>
            </div>
        )
    }
}
/*const User=function(props){
    return(
        <p>Name:{props.name}</p>
    );
}*/
ReactDOM.render( <IndecisionApp />, document.getElementById('app'));
//we can use class bases and stateless function together but statless fuction is used only where there is no states