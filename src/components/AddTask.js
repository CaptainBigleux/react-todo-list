import React from "react";
import { useState } from "react";

const AddTask = ({ newTask, setNewTask, tasks, setTasks, darkMode }) => {
  const [error, setError] = useState(false);
  return (
    <>
      {error ? (
        <div className="error-text">Task is empty or already exists.</div>
      ) : null}
      <div className={darkMode ? "add-task-holder-dark" : "add-task-holder"}>
        <input
          className={error ? "add-task-input error" : "add-task-input"}
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button
          className="add-task-btn"
          onClick={() => {
            if (
              newTask !== "" &&
              tasks.find((t) => t.text === newTask) === undefined
            ) {
              const newTasks = [...tasks];
              const newObj = {
                text: newTask,
                isChecked: false,
                created: Date.now(),
              };
              newTasks.push(newObj);
              setTasks(newTasks);
              setNewTask("");
              setError(false);
            } else setError(true);
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
