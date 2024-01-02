import React, { useState } from "react";
import "./Password.css";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    length: false,
  });

  const validatePassword = (input) => {
    const lowercase = /[a-z]/.test(input);
    const uppercase = /[A-Z]/.test(input);
    const number = /[0-9]/.test(input);
    const length = input.length > 8;
    setValidation({
      lowercase,
      uppercase,
      number,
      length,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Enter the value"
        value={password}
        onChange={handleChange}
      />
      <h3 className="title">Password should contain the following:</h3>
      <div className="passwordCondition">
        <p
          className={
            validation.lowercase ? "afterValidation" : "beforeValidation"
          }
        >
          Password should contain atleast one lowercase.
        </p>
        <p
          className={
            validation.uppercase ? "afterValidation" : "beforeValidation"
          }
        >
          Password should contain one uppercase.
        </p>
        <p
          className={validation.number ? "afterValidation" : "beforeValidation"}
        >
          Password should contain one number.
        </p>
        <p
          className={validation.length ? "afterValidation" : "beforeValidation"}
        >
          Password contain atleast 8 characters.
        </p>
      </div>
      <button className="passwordButton">submit</button>
    </div>
  );
};

export default PasswordValidator;
