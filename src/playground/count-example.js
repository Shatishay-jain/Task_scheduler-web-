class Counter extends React.Component{
    constructor(props){
        super(props);
        this.Addone=this.Addone.bind(this);
        this.Subtractone=this.Subtractone.bind(this);
        this.Reset=this.Reset.bind(this);
        this.state={
            count:0
        };
    }
   componentDidMount(){
       const stringCount=localStorage.getItem('count');
       const count=parseInt(stringCount,10);
       //console.log(isNaN(stringCount,10));
       if(!isNaN(count))
       {
           this.setState(()=>({
               count:count
           }));
       }
   }
   componentDidUpdate(prevprops,prevstate){
        if(prevstate.count!==this.state.count)
        {
            localStorage.setItem('count',this.state.count);
        }
    }
    Addone(){
        this.setState((prevstate)=>{
        return{
            count: prevstate.count+1,
        };
    });
    }
    Subtractone(){
        this.setState((prevstate)=>{
            return{
                count:prevstate.count%10,
            };
        });
        
    }
    Reset(){
        this.setState(()=>{
            return{
                count:0,
            };
        });
        this.setState((pre)=>{
            return{
                count:pre.count+1,
            };
        });

    }
    render(){
        return(
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.Addone}>ADD</button>
                <button onClick={this.Subtractone}>SUB</button>
                <button onClick={this.Reset}>RESET</button>
            </div>
           
        );
    }
}

ReactDOM.render(<Counter  count={9}/>,document.getElementById("app"));
/*let count=0;
const add=()=>{
    count+=1;
    renderC();
    console.log('add',count);
};
let sub=()=>{
    count--;
    renderC();
    console.log('sub',count);
};
let reset=()=>{
    count=0;
    renderC();
    console.log('reset at this time');
};



const appRoot=document.getElementById("app");
const renderC=()=>{
    const template1=(
        <div>
            <h1>count:{count}</h1>
            <button onClick={add}> +1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}> reset</button>
        </div>
    );
    ReactDOM.render(template1,appRoot);
};
renderC();
*/