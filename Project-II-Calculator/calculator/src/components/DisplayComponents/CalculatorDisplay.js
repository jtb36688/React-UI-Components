import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
    return (
    <div className='CalculatorDisplay'>{props.currentValue}</div>
    )
}
export default CalculatorDisplay;
