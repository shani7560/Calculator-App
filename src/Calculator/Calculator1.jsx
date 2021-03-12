import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: "0",
      temp: false,
      temp1: false,
      previousNumber: null,
      currentNumber: "0",
      operator: "",
    };
  }
  //=====================================Input ===============================
  onAddToInput = (digit) => {
    let { input, temp, temp1 } = this.state;

    if (input === "0" && temp === false) {
      console.log();
      this.setState({
        input: digit,
      });
    } else if (input !== "0" && temp === false) {
      let a = digit.toString();
      console.log(a);

      this.setState({
        input: input + a,
      });
    } else if (temp === true && temp1 === false) {
      // console.log(digit);
      this.setState({
        input: digit,
        temp1: true,
      });
    } else if (temp === true && temp1 === true) {
      //   console.log(digit);
      let a = digit.toString();

      this.setState({
        input: input + a,
      });
    }
  };
  //===================================Addition '+' input======================
  onAddition = () => {
    let { input, operator, currentNumber, previousNumber } = this.state;

    if (previousNumber !== null) {
      if (this.state.operator !== "") {
        if (this.state.operator === "plus") {
          this.setState({
            input: parseInt(input) + parseInt(previousNumber),
            previousNumber: parseInt(input) + parseInt(previousNumber),
          });
        } else if (this.state.operator === "substract") {
          this.setState({
            input: parseInt(input) - parseInt(previousNumber),
            previousNumber: parseInt(input) - parseInt(previousNumber),
          });
        } else if (this.state.operator === "multiply") {
          this.setState({
            input: parseInt(input) * parseInt(previousNumber),
            previousNumber: parseInt(input) * parseInt(previousNumber),
          });
        } else if (this.state.operator === "division") {
          this.setState({
            input: parseInt(input) / parseInt(previousNumber),
            previousNumber: parseInt(input) / parseInt(previousNumber),
          });
        }
      }
    }

    // if (previousNumber !== null) {
    //   this.state.operator = "plus";
    //   this.setState({
    //     input: parseInt(input) + parseInt(previousNumber),
    //     previousNumber: parseInt(input) + parseInt(previousNumber),
    //     previousNumber: null,
    //     currentNumber: "0",
    //     temp1: false,
    //   });
    //   console.log("previousNumber ", previousNumber);
    //   console.log("currentNumber", input);

    //   return 0;
    // }

    this.state.operator = "plus";
    this.setState({
      previousNumber: input,
      temp: true,
      temp1: false,
    });
  };

  // ================================Subtract===============================
  onSubtract = () => {
    let { input, previousNumber } = this.state;

    if (previousNumber !== null) {
      if (this.state.operator !== "") {
        if (this.state.operator === "plus") {
          this.setState({
            input: parseInt(input) + parseInt(previousNumber),
            previousNumber: parseInt(input) + parseInt(previousNumber),
          });
        } else if (this.state.operator === "substract") {
          this.setState({
            input: parseInt(input) - parseInt(previousNumber),
            previousNumber: parseInt(input) - parseInt(previousNumber),
          });
        } else if (this.state.operator === "multiply") {
          this.setState({
            input: parseInt(input) * parseInt(previousNumber),
            previousNumber: parseInt(input) * parseInt(previousNumber),
          });
        } else if (this.state.operator === "division") {
          this.setState({
            input: parseInt(input) / parseInt(previousNumber),
            previousNumber: parseInt(input) / parseInt(previousNumber),
          });
        }
      }
    }
    console.log("hello");
    this.state.operator = "substract";
    this.setState({
      previousNumber: input,
      temp: true,
      temp1: false,
    });
  };
  //====================================Multiply =====================================
  onMultiply = () => {
    let { input, previousNumber } = this.state;

    if (previousNumber !== null) {
      if (this.state.operator !== "") {
        if (this.state.operator === "plus") {
          this.setState({
            input: parseInt(input) + parseInt(previousNumber),
            previousNumber: parseInt(input) + parseInt(previousNumber),
          });
        } else if (this.state.operator === "substract") {
          this.setState({
            input: parseInt(input) - parseInt(previousNumber),
            previousNumber: parseInt(input) - parseInt(previousNumber),
          });
        } else if (this.state.operator === "multiply") {
          this.setState({
            input: parseInt(input) * parseInt(previousNumber),
            previousNumber: parseInt(input) * parseInt(previousNumber),
          });
        } else if (this.state.operator === "division") {
          this.setState({
            input: parseInt(input) / parseInt(previousNumber),
            previousNumber: parseInt(input) / parseInt(previousNumber),
          });
        }
      }
    }

    this.state.operator = "multiply";
    this.setState({
      previousNumber: input,
      temp: true,
      temp1: false,
    });
  };
  //===========================================division==============================
  onDivision = () => {
    let { input, previousNumber } = this.state;

    if (previousNumber !== null) {
      if (this.state.operator !== "") {
        if (this.state.operator === "plus") {
          this.setState({
            input: parseInt(input) + parseInt(previousNumber),
            previousNumber: parseInt(input) + parseInt(previousNumber),
          });
        } else if (this.state.operator === "substract") {
          this.setState({
            input: parseInt(input) - parseInt(previousNumber),
            previousNumber: parseInt(input) - parseInt(previousNumber),
          });
        } else if (this.state.operator === "multiply") {
          this.setState({
            input: parseInt(input) * parseInt(previousNumber),
            previousNumber: parseInt(input) * parseInt(previousNumber),
          });
        } else if (this.state.operator === "division") {
          this.setState({
            input: parseInt(input) / parseInt(previousNumber),
            previousNumber: parseInt(input) / parseInt(previousNumber),
          });
        }
      }
    }

    this.state.operator = "division";
    this.setState({
      previousNumber: input,
      temp: true,
      temp1: false,
    });
  };
  //============================================percentage===============================
  onPercentage = () => {
    let { input } = this.state;
    this.setState({
      previousNumber: input,
      temp: true,
    });
  };

  onPercentage = () => {
    const { input } = this.state;
    const value = parseInt(input);

    this.setState({
      input: String(value / 100),
    });
  };
  //============================= +/- =========togglesign================
  toggleSign = (name) => {
    const { input } = this.state;
    console.log(input);

    this.setState({
      input: input.charAt(0) === "-" ? input.substr(1) : "-" + input,
    });
  };
  //====================button Clear Ac======================
  onClearInput = (button) => {
    //console.log(button);

    this.setState({
      input: "0",
      temp: false,
      temp1: false,
      previousNumber: null,
      currentNumber: "",
      operator: "",
    });
  };
  //================================Decimal (.)=================================
  onAddDecimal = (val) => {
    //let dot = this.state.input + val.target.name;
    let { input } = this.state;

    console.log(this.state.input);
    if (this.state.input.toString().indexOf(".") === -1) {
      this.setState({
        input: this.state.input + val.target.name,
        //input: "0.",
      });
    }
  };
  //============================= Equal '=' ==============================
  onEvaluate = () => {
    let { input, temp, temp1 } = this.state;
    this.setState({
      previousNumber: input,
      temp: true,
      temp1: true,
    });
    this.state.currentNumber = this.state.input;

    if (this.state.operator === `plus`) {
      console.log("plus");
      console.log(this.state.previousNumber);
      console.log(this.state.currentNumber);
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),

        temp1: false,
        operator: "",
      });
    } else if (this.state.operator === `substract`) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber),
        temp1: false,
        operator: "",
      });
    } else if (this.state.operator === `multiply`) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
        temp1: false,
        operator: "",
      });
    } else if (this.state.operator === `division`) {
      let result =
        parseFloat(this.state.previousNumber) /
        parseFloat(this.state.currentNumber);
      console.log(result);
      if (isNaN(result)) {
        result = 0;
      }
      this.setState({
        input: result,
        temp1: false,
        // operator: "",
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
            <button name="AC" onClick={() => this.onClearInput(0)}>
              AC
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
            <button onClick={() => this.onAddToInput(0)}>0</button>
          </div>
          <div className="components-button">
            <button type="button" name="." onClick={this.onAddDecimal}>
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
