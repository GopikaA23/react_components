import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  return (
    <div className="toggle-switch">
      <label>
        <input type="checkbox" />
        <span className="slider round"></span>
        <span className="left-label">{props.left}</span>
        <span className="right-label">{props.right}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
