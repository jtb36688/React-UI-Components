import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ButtonContainer from './components/ButtonComponents/ButtonContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      operator: [ '+', '-', 'X', '÷', '=', 'clear'],
      currentOperator: null,
      currentEquation: 0,
      currentValue: 0,
      minusValue: 0,
      divideValue: 0,
    }
    this.equationstyling = this.equationstyling.bind(this);
    this.numstyling = this.numstyling.bind(this);
    this.opstyling = this.opstyling.bind(this);
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleOpsClick = this.handleOpsClick.bind(this);
  }

  OperatorSymbol() {
    if (this.state.currentOperator === 'add') {
      return ' + '
    }
    if (this.state.currentOperator === 'subtract') {
      return ' - '
    }
    if (this.state.currentOperator === 'multiply') {
      return ' * '
    }
    if (this.state.currentOperator === 'divide') {
      
    } return ' ÷ '
  }
  
  equationstyling() {
    if (this.state.currentEquation === 0) {
      return 'HiddenEquation'
    }
    else {
      return 'Equation'
    }
  }

  opstyling(i) {
    if (i === 5) {
      return 'WideButton'
    }
    else {
      return 'OpsButton'
    }
  }

  numstyling(i) {
    if (i > 0) {
      return 'NumberButton'
    }
    else {
      return 'WideButton'
    }
  }

  handleNumClick(i) {
  
    if (!this.state.currentOperator) {
    const current = this.state.currentValue.toString();
    const newvalue =  parseInt((current + i.toString()), 10);
    this.setState({
      currentValue: newvalue
    })}
    else if (this.state.currentEquation === this.state.currentValue) {
    const current = 0;
    const newvalue =  parseInt((current + i.toString()), 10);
    this.setState({
      currentValue: newvalue
  })}
  else {
    const current = this.state.currentValue.toString();
    const newvalue =  parseInt((current + i.toString()), 10);
    this.setState({
      currentValue: newvalue
    })
  }
}

  handleOpsClick(i) {
    if (i === 4) {
        if (this.state.currentOperator === 'add') {
          const total = (this.state.currentEquation + this.state.currentValue)
          this.setState({
            currentValue: total,    
        })}
        if (this.state.currentOperator === 'subtract') {
          if (this.state.minusValue) {
              const total = (this.state.currentValue - this.state.minusValue)
              this.setState({
                currentValue: total,
          })}
          else {
            const setminus = () => {this.setState((currentState) => {
              return {
              minusValue: currentState.currentValue,
              }})}
            setminus();
            const total = (this.state.currentEquation - this.state.currentValue)
            this.setState({
              currentValue: total
            })}}
        
        if (this.state.currentOperator === 'multiply') {
          const total = (this.state.currentEquation * this.state.currentValue)
          this.setState({
            currentValue: total,    
        })}

        if (this.state.currentOperator === 'divide') {
          if (this.state.divideValue) {
              const total = (this.state.currentValue / this.state.divideValue)
              this.setState({
                currentValue: total,
          })}
          else {
            const setdivide = () => {this.setState((currentState) => {
              return {
              divideValue: currentState.currentValue,
              }})}
            setdivide();
            const total = (this.state.currentEquation / this.state.currentValue)
            this.setState({
              currentValue: total
            })}}
          
      }

    if (i === 5) {
      this.setState({
        currentOperator: null,
        currentEquation: 0,
        currentValue: 0
      })
    }
    if (i === 0) {
      this.setState((currentState) => {
      return {
        currentOperator: 'add',
        currentEquation: currentState.currentValue,
      }})
    }
    if (i === 1) {
      this.setState((currentState) => {
        return {
          currentOperator: 'subtract',
          currentEquation: currentState.currentValue,
        }})
      }
    if (i === 2) {
      this.setState((currentState) => {
        return {
          currentOperator: 'multiply',
          currentEquation: currentState.currentValue,
        }})
      }

    
    if (i === 3) {
      this.setState((currentState) => {
        return {
          currentOperator: 'divide',
          currentEquation: currentState.currentValue,
        }})
      }

    
    }

  render ()  {
    return (
      <div>
      <CalculatorDisplay
      equationstyling={this.equationstyling()}
      currentOperator={this.OperatorSymbol()}
      currentEquation={this.state.currentEquation}
      currentValue={this.state.currentValue} />
      <ButtonContainer 
      opclasses={this.opstyling}
      operators={this.state.operator}
      numclasses={this.numstyling}
      numbers={this.state.number}
      NumonClick= {this.handleNumClick}
      OpsonClick= {this.handleOpsClick}
      />
      <div>{this.state.divideValue}</div>
      </div>
    );
  };
}
export default App;
