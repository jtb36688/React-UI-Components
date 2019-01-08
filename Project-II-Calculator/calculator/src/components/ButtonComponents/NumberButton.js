import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <button className={props.numclasses} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default NumberButton;