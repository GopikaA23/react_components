import React from "react";
import "./App.css";
import Button from "./components/Button";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Menu from "./components/Menu";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import PasswordValidator from "./components/Password";
import ToggleSwitch from "./components/ToggleSwitch";
import Calculator from "./components/Calculator";
import "./components/Calculator.css"


function App() {
  return (
    <div className="App">
      {/* <div className="App-button">
        <Button
          type="primary"
          label="Primary"
          onClick={() => {
            console.log("you clicked primary button");
          }}
        />
        <Button
          type="secondary"
          label="Secondary"
          onClick={() => {
            console.log("you clicked secondary button");
          }}
        />
        <Button
          type="outline"
          label="Outline"
          onClick={() => {
            console.log("you clicked outline button");
          }}
        />
        <Button
          type="default"
          label="Default"
          pilled
          onClick={() => {
            console.log("you clicked default button");
          }}
        />
        <Button
          type="submit"
          label="Submit"
          loading
          loadingText="Submitting..."
          onClick={() => {
            console.log("you clicked submit button");
          }}
        />
      </div>
      <div>
        <Accordion
          title="What is a dog?"
          description="A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
        />
      </div>
      <div>
        <DropDown
          options={["HTML", "CSS", "JavaScript", "Ruby"]}
          onChange={(option) => console.log(option)}
          value="Ruby"
        />
      </div>
      <div>
        <Menu
          options={[
            {
              title: "Frontend",
              items: [
                {
                  title: "HTML",
                },
                {
                  title: "CSS",
                },
                {
                  title: "JS",
                  items: [
                    {
                      title: "React",
                    },
                    {
                      title: "Angular",
                    },
                    {
                      title: "Node",
                    },
                  ],
                },
              ],
            },
            {
              title: "Backend",
              items: [
                {
                  title: "Java",
                  items: [
                    {
                      title: "OOPS",
                    },
                  ],
                },
                {
                  title: "Python",
                },
                {
                  title: "Ruby",
                },
              ],
            },
          ]}
        />
      </div>
      <div>
        <ToDoList
          list={[
            { task: "Learn to Code", completed: false },
            { task: "Practice everyday", completed: false },
            { task: "Become a developer", completed: false },
          ]}
        />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <PasswordValidator />
      </div> */}
      {/* <div>
        <ToggleSwitch left="ON" right="OFF" />
      </div> */}
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
