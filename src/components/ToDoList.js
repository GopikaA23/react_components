import React, { useState } from "react";
import "./ToDoList.css";
import _ from "lodash";

const ToDoList = ({ list }) => {
  const [values, setValues] = useState("");
  const [input, setInput] = useState(list);
  const [completed, setCompleted] = useState(list);

  const handleAdd = (e) => {
    e.stopPropagation();
    setCompleted([...completed, { task: values, completed: false }]);
    setInput([...input, { task: values, completed: false }]);
    setValues("");
  };

  const handleAll = () => {
    setCompleted([...input]);
  };

  const handleActive = () => {
    setCompleted(_.filter(input, (e) => e.completed === false));
  };

  const handleToggle = (index) => {
    input[index].completed === false
      ? (input[index].completed = true)
      : (input[index].completed = false);
  };

  const handleCompleted = () => {
    setCompleted(_.filter(input, (e) => e.completed === true));
  };

  const handleClearCompleted = () => {
    setCompleted(_.remove(input, (e) => e.completed === true));
    setCompleted(input);
  };

  return (
    <div className="todoBox">
      <div>
        <input
          className="todoInput"
          placeholder="enter the text"
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button
          className={values.length === 0 ? "disabledButton" : "enabledButton"}
          disabled={values.length === 0}
          onClick={(event) => handleAdd(event)}
        >
          ADD
        </button>
      </div>
      {completed.map((value, index) => (
        <div className="list" key={index}>
          <input
            className="check"
            type="checkbox"
            onChange={() => handleToggle(index)}
          />
          {value.task}
        </div>
      ))}
      <div>
        <button onClick={handleAll}>all</button>
        <button onClick={handleActive}>active</button>
        <button onClick={handleCompleted}>completed</button>
        <button onClick={handleClearCompleted}>clear completed</button>
      </div>
    </div>
  );
};

export default ToDoList;
