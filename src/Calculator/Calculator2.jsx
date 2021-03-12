import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: "0",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  onAddToInput = (digit) => {
    const { input, operator, previousNumber, currentNumber } = this.state;

    if (operator !== "") {
      if (input === "0") {
        this.setState({
          input: input === "0" ? String(digit) : input + digit,
        });
      } else if (input !== "0") {
        this.setState({
          input: input === "0" ? String(digit) : digit,
        });
      } else {
        this.setState({
          input: input === "0" ? String(digit) : input + digit,
        });
      }
    } else {
      this.setState({
        input: input === "0" ? String(digit) : input + digit,
      });
    }

    // else if (input !== "0") {
    //     console.log("====================================");
    //     console.log(input);
    //     console.log("====================================");
    //     this.setState({
    //       input: input === "0" ? String(digit) : input + digit,
    //     });
    //   }

    // if (operator !== "") {
    //   if (input === "0") {
    //     this.setState({
    //       input: input === "0" ? String(digit) : input + digit,
    //     });
    //   }
    // }
  };

  onAddDecimal = (val) => {
    // if (this.state.input.toString().indexOf(".") === -1) {
    //   this.setState({ input: this.state.input + val.target.name });
    // }

    const { input } = this.state;
    if (input.indexOf(".") === -1) {
      this.setState({
        input: input + ".",
      });
    }
  };

  onClearInput = (val) => {
    this.setState({ input: val.target.name });
  };

  onAddition = () => {
    this.state.previousNumber = this.state.input;
    console.log(this.state.previousNumber);
    this.state.operator = "plus";
    //console.log(",,", this.state.operator);
    //   this.setState({ input: "" });
  };

  onSubtract = (val) => {
    this.state.previousNumber = this.state.input;
    // this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  onMultiply = () => {
    this.state.previousNumber = this.state.input;
    //this.setState({ input: "" });
    this.state.operator = "multiply";
  };
  onDivision = () => {
    this.state.previousNumber = this.state.input;
    //this.setState({ input: "" });
    this.state.operator = "division";
  };
  onPercentage = () => {
    const { input } = this.state;
    const value = parseInt(input);

    this.setState({
      input: String(value / 100),
    });
  };

  toggleSign = () => {
    const { input } = this.state;

    this.setState({
      input: input.charAt(0) === "-" ? input.substr(1) : "-" + input,
    });
  };

  onEvaluate = () => {
    this.state.currentNumber = this.state.input;
    //this.state.previousNumber = this.state.input;

    if (this.state.operator === `plus`) {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === `subtract`) {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === `multiply`) {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === `division`) {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }
  };

  render() {
    const { input } = this.state;
    // console.log(input);

    return (
      <div className="components-app">
        <div className="display">
          <div className="components-display">
            <div className="components-zero">{input}</div>
          </div>
        </div>
        <div className="components-button-display">
          <div className="components-button">
            <button name="0" onClick={this.onClearInput}>
              Ac
            </button>
          </div>
          <div className="components-button">
            <button name="+/-" onClick={() => this.toggleSign()}>
              +/-
            </button>
          </div>
          <div className="components-button">
            <button name="%" onClick={this.onPercentage}>
              %
            </button>
          </div>
          <div className="components-button">
            <button
              name="/"
              onClick={this.onDivision}
              className="components-button-orange"
            >
              /
            </button>
          </div>
        </div>
        <div className="components-button-display">
          <div className="components-button">
            <button name="7" onClick={() => this.onAddToInput(7)}>
              7
            </button>
          </div>
          <div className="components-button">
            <button name="8" onClick={() => this.onAddToInput(8)}>
              8
            </button>
          </div>
          <div className="components-button">
            <button name="9" onClick={() => this.onAddToInput(9)}>
              9
            </button>
          </div>
          <div className="components-button">
            <button
              name="*"
              onClick={this.onMultiply}
              className="components-button-orange"
            >
              *
            </button>
          </div>
        </div>
        <div className="components-button-display">
          <div className="components-button">
            <button name="4" onClick={() => this.onAddToInput(4)}>
              4
            </button>
          </div>
          <div className="components-button">
            <button name="5" onClick={() => this.onAddToInput(5)}>
              5
            </button>
          </div>
          <div className="components-button">
            <button name="6" onClick={() => this.onAddToInput(6)}>
              6
            </button>
          </div>
          <div className="components-button">
            <button
              name="-"
              onClick={this.onSubtract}
              className="components-button-orange"
            >
              -
            </button>
          </div>
        </div>
        <div className="components-button-display">
          <div className="components-button">
            <button name="1" onClick={() => this.onAddToInput(1)}>
              1
            </button>
          </div>
          <div className="components-button">
            <button name="2" onClick={() => this.onAddToInput(2)}>
              2
            </button>
          </div>
          <div className="components-button">
            <button name="3" onClick={() => this.onAddToInput(3)}>
              3
            </button>
          </div>
          <div className="components-button">
            <button
              name="+"
              onClick={this.onAddition}
              className="components-button-orange"
            >
              +
            </button>
          </div>
        </div>
        <div className="components-button-display">
          <div className="components-button-zero">
            <button name="0" onClick={() => this.onAddToInput(0)}>
              0
            </button>
          </div>
          <div className="components-button">
            <button name="." onClick={this.onAddDecimal}>
              .
            </button>
          </div>
          <div className="components-button">
            <button
              name="="
              onClick={this.onEvaluate}
              className="components-button-orange"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
