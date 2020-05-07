import React from 'react';
import Option from './Option.js';
const Options=(props)=>(
    <div>
    <div className="widget-header">
        <h3 className="widget-header__title">Your option(s)</h3>
        <button 
        className='button button--link'
        onClick={props.handleDeleteOptions}
        >
        RemoveAll
        </button>
    </div>
    {props.objects.length===0&&<p className='widget-element'>please add someting to get started</p>}
        {
            props.objects.map((options,index)=>(
                <Option 
                key={options} optionText={options}
                count={index+1}
                handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        
       
    </div>
);
export default Options;