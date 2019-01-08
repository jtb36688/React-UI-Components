import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <button className='OpsButton' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default ActionButton;