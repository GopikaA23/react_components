import React, { useState } from "react";
import _ from "lodash";
// import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    if (value === "0") {
      setValue(buttonValue);
    } else {
      setValue(value + buttonValue);
    }
  };

  const handleClear = () => {
    setValue("0");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleCalculate = () => {
    setValue(eval(value));
  };

  return (
    <div className="calculator">
      <input value={value} />
      <div className="buttons">
        <button className="button-num" onClick={handleClear}>
          AC
        </button>
        <button className="button-num" onClick={handleDelete}>
          Del
        </button>
        <button className="button-num" onClick={() => handleButtonClick("%")}>
          %
        </button>
        <button className="button-sym" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button className="button-num" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="button-num" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="button-num" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="button-sym" onClick={() => handleButtonClick("*")}>
          x
        </button>
        <button className="button-num" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="button-num" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="button-num" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="button-sym" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button className="button-num" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="button-num" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="button-num" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="button-sym" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button className="button-num" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="button-num" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="button-sym" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
