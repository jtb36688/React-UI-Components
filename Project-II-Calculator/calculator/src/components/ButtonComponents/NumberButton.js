import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <button className='NumberButton' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default NumberButton;