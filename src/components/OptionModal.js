import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
    
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose ={props.deleteSelectedOption}
    contentLabel='Selected option'
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    
    <button className='button'
       onClick={(e) => {
           console.log(props.selectedOption);
           props.handleDeleteOption(props.selectedOption);
           props.deleteSelectedOption();
       }
    }
>Delete item </button> 
    <button className='button'
    onClick={props.deleteSelectedOption} >Skip</button>
    
    </Modal>
);
export default OptionModal;
