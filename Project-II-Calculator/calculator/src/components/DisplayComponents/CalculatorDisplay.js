import React from "react";
import "./Display.css";

function CalculatorDisplay(props) {
  return (
    <div className="CalculatorDisplay">
      <div className={props.equationstyling}>
        {" "}
        {props.currentEquation} {props.currentOperator}{" "}
      </div>
      <div> {props.currentValue} </div>
    </div>
  );
}
export default CalculatorDisplay;
