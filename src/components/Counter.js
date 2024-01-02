import React, { useState } from "react";
import "./Counter.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + increment);
  };

  const handleDecrement = () => {
    setCounter(counter - increment);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleIncrementInput = (e) => {
    const value = parseInt(e.target.value);
    setIncrement(value);
  };

  return (
    <div className="counter-box">
      <div className="counter-title">Counter App</div>
      <div className="counter-value">{counter}</div>
      <div>
        <button className="increment" onClick={handleIncrement}>
          <FaPlus />
        </button>{" "}
        <button
          className={counter === 0 ? "disabledDecrement" : "enabledDecrement"}
          disabled={counter === 0}
          onClick={handleDecrement}
        >
          <FaMinus />
        </button>{" "}
        <button className="reset" onClick={handleReset}>
          <GrPowerReset />
        </button>
      </div>
      <div className="counter-increment">
        Increment by:
        <input
          type="number"
          value={increment}
          onChange={handleIncrementInput}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
