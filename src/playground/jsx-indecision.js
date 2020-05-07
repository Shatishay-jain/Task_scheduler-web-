console.log("test")
let app={
    title:'indecision app',
    subtitle:'put your life on your hands ',
    x:-1,
    options: [],
};
const onFormSubmit=(e) => {
    e.preventDefault();
  
    const option=e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        app.x++;
        e.target.elements.option.value = '';
        renderC();

    }
};
const removeall=()=>{
    app.options=[];
    app.x=-1;
    renderC();

};
const makeTheDecision=()=>{
    const randnum=Math.floor(Math.random()*app.options.length);
    
    alert(app.options[randnum]);
};
const appRoot=document.getElementById("app");
const renderC=()=>{
let template=(
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0?'here are your options:':'No options present:'}</p>
   {
       <button disabled={app.options.length===0} onClick={makeTheDecision}>What should i do</button>}
    <button onClick={removeall}> Remove All</button>
    
    <ol>
       
       { 
            app.options.map((string) => {
                return <li key={string}> {string}</li>;
            })
        }    
    </ol>
    <form onSubmit = {onFormSubmit}>
    
    <input type="text" name="option"/>
    <button>on click</button>
    </form>
</div>
);
ReactDOM.render(template,appRoot);
}
renderC();

