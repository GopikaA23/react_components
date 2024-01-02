import React, { useState } from "react";
import _ from "lodash";
import "./DropDown.css";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";

function DropDown(props) {
  const options = props.options;
  const [showDropDown, setShowDropDown] = useState(false);
  const [showValue, setShowValue] = useState(props.value);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleValueChange = (passedValue) => {
    setShowValue(passedValue);
    setShowDropDown(!showDropDown);
    props.onChange(passedValue);
  };

  return (
    <div className="DropDown-page">
      <input
        className="DropDown-input"
        value={showValue}
        onChange={(event) => setShowValue(event.target.value)}
      />
      <button className="DropDown-button" onClick={handleClick}>
        {showDropDown ? <VscTriangleDown /> : <VscTriangleRight />}
      </button>
      {showDropDown && (
        <div>
          {_.map(options, (word) => (
            <div
              className="DropDown-options"
              onClick={(event) => handleValueChange(event.target.textContent)}
              key={word}
            >
              {word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
