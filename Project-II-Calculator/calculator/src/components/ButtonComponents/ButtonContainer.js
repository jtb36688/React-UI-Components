import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js';
import NumberButton from './NumberButton.js';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

class ButtonContainer extends React.Component {
    renderNumButton(i) {
        return <NumberButton value={this.props.numbuttons[i]}
        onClick={() => this.props.onClick(i)} />;
    }

    renderOpsButton(i) {
        return <ActionButton value={this.props.opsbuttons[i]}
        onClick={() => this.props.onClick(i)} />;
    }

    render4Rows = () => {
        let table = [];
        for (let i = 1; i < 4; i++) {
            let children = [];
              for (let x = 0; x < 3; x++) {
                children.push(this.renderNumButton(x+i*3))
                if (x === 2) {
                    children.push(this.renderOpsButton(i))
                }
              }
            table.unshift(<div className="4-row">{children}</div>);
          }
          return table
        }

    renderWideRowTop = () => {
        return (
            <div>
            {this.renderOpsButton(5)}
            {this.renderOpsButton(3)}
            </div>
        )

    }

    renderWideRowBot = () => {
        return (
            <div>
            {this.renderNumButton(0)}
            {this.renderOpsButton(4)}
            </div>
        )

    }

    render() {
        return (
            <div>
                {this.renderWideRowTop}
                {this.render4Rows()}
                {this.renderWideRowBot}
            </div>
        )
    }
    }
export default CalculatorDisplay;