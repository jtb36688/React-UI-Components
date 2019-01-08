import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ButtonContainer from './components/ButtonComponents/ButtonContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperator: null,
      currentEquation: null,
      currentValue: 0
    }
  }
  render ()  {
    return (
      <div>
      <CalculatorDisplay />
      <ButtonContainer />
      </div>
    );
  };
}
export default App;
