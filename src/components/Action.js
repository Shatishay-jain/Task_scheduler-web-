import React from 'react';
const Action=function(props){
    return (
        <div>
            <button 
            className ="big-button"
            onClick={props.handlePick}
            disabled={!props.hasobject}

            >
            Pick a random item
            </button>
        </div>
    );
};
export default Action;