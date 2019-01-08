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
      currentEquation: 'none',
      currentValue: 0,
    }

    this.numstyling = this.numstyling.bind(this);
    this.opstyling = this.opstyling.bind(this);
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleOpsClick = this.handleOpsClick.bind(this);
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
    const newvalue =  parseInt(current + i.toString());
    this.setState({
      currentValue: newvalue
    })
    console.log(newvalue)
  
  }
}

  handleOpsClick(i) {
    if (i === 4) {

    }
    if (i === 5) {
      this.setState({
        currentOperator: null,
        currentEquation: 'none',
        currentValue: 0
      })

    if (i === 1) {
      this.setState((currentState) => {
      return {
        currentOperator: 1,
        currentEquation: currentState.currentValue,
        currentValue: 0
      }})
    }
    }

  }

  render ()  {
    return (
      <div>
      <CalculatorDisplay
      currentValue={this.state.currentValue} />
      <ButtonContainer 
      opclasses={this.opstyling}
      operators={this.state.operator}
      numclasses={this.numstyling}
      numbers={this.state.number}
      NumonClick= {this.handleNumClick}
      OpsonClick= {this.handleOpsClick}
      />
      </div>
    );
  };
}
export default App;
