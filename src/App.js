import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

import "./App.css";

function App() {
  const [status, setStatus] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>Todo Task</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="Todo Title" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="Descriptioin to your task" />
          </div>
          <div className="todo-input-item">
            <label>Date and Time</label>
            <input type="datetime-local" />
          </div>
          <div className="todo-input-item">
            <label>Status</label>
            <div>
              <input
                type="radio"
                id="upcoming"
                name="status"
                value="upcoming"
                checked={status === "upcoming"}
                onChange={handleStatusChange}
              />
              <label htmlFor="upcoming">Upcoming</label>
            </div>
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                value="done"
                checked={status === "done"}
                onChange={handleStatusChange}
              />
              <label htmlFor="done">Done</label>
            </div>
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn isCompleteScreen ${
              isCompleteScreen === false && "active"
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Upcoming
          </button>
          <button
            className={`secondaryBtn isCompleteScreen ${
              isCompleteScreen === true && "active"
            }`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Done
          </button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div>
              <h3>Task 1</h3>
              <h4>Date And Time</h4>
              <p>Descriptioin</p>
            </div>

            <div>
              <AiOutlineDelete className="icon" />
              <BsCheckLg className="check-icon" />
              <AiOutlineEdit className="check-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
