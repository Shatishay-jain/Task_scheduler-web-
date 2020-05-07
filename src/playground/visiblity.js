class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.visb=this.visb.bind(this);
        this.state={
            visx:false,
        };
    }
    visb(){
        this.setState((prevstate)=>{
        return{
            visx : !prevstate.visx,
        };
    });

    }
    render(){
        return (
            <div>
                <h1>VISIBILTY TOGGLE</h1>
                <button onClick={this.visb}>
                {
                    this.state.visx?'hide details':'show details'
                }
                </button>
                {
                    this.state.visx&&(<p>xx</p>)
                }
            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'));
/*let vis=false;
const visb=()=>{
    vis=!vis;
    renderC();
};
let aw=-1;

const awa=()=>{
    aw=1;
    renderC();
};
const awz=()=>{
    aw=0;
    renderC();
};
const renderC=()=>{
let template=(
    <div>
        <h1>VISIBILTY TOGGLE</h1>
        <button onClick={visb}>
        {
            vis?'Hide Details':'Show Details'
        }
        </button>
        {vis&&(
            <div>
            <p>'press yes if you are male else no'</p>
                <button onClick={awa}>yes</button>
                <button onClick={awz}>no</button>
                {
                    (aw==1)&&(
                        <div>
                            <p>you are male</p>
                        </div>
                    )
                 }
                 {
                    aw==0?(
                        <div>
                            <p>you are female</p>
                        </div>
                    ):(<div>
                        
                        </div>)
                 }  
                    
                    
                
               
            </div>
        )

        }
    </div>

);
ReactDOM.render(template,document.getElementById('app'));

};
renderC();*/