import React from "react";

const AddTask = ({ newTask, setNewTask, tasks, setTasks }) => {
  return (
    <div className="add-task-holder">
      <input
        className="add-task-input"
        type="text"
        placeholder="new task"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      />
      <button
        className="add-task-btn"
        onClick={() => {
          if (newTask !== "") {
            const newTasks = [...tasks];
            newTasks.push(newTask);
            setTasks(newTasks);
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
