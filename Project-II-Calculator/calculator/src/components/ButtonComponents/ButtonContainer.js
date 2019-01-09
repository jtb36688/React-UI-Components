import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton.js";
import NumberButton from "./NumberButton.js";

class ButtonContainer extends React.Component {
  renderNumButton(i) {
    return (
      <NumberButton
        key={this.props.numbers[i]}
        value={this.props.numbers[i]}
        onClick={() => this.props.NumonClick(i)}
        numclasses={this.props.numclasses(i)}
      />
    );
  }

  renderOpsButton(i) {
    return (
      <ActionButton
        key={this.props.operators[i]}
        value={this.props.operators[i]}
        opclasses={this.props.opclasses(i)}
        onClick={() => this.props.OpsonClick(i)}
      />
    );
  }

  render4Rows = () => {
    let table = [];
    for (let i = 0; i < 3; i++) {
      let children = [];
      for (let x = 1; x < 4; x++) {
        children.push(this.renderNumButton(x + i * 3));
        if (x === 3) {
          children.push(this.renderOpsButton(i));
        }
      }
      table.unshift(
        <div key={i} className="4-row">
          {children}
        </div>
      );
    }
    return table;
  };

  renderWideRowTop = () => {
    return (
      <div>
        {this.renderOpsButton(5)}
        {this.renderOpsButton(3)}
      </div>
    );
  };

  renderWideRowBot = () => {
    return (
      <div>
        {this.renderNumButton(0)}
        {this.renderOpsButton(4)}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderWideRowTop()}
        {this.render4Rows()}
        {this.renderWideRowBot()}
      </div>
    );
  }
}
export default ButtonContainer;
