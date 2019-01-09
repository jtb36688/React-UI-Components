import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <button className={props.opclasses} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default ActionButton;
