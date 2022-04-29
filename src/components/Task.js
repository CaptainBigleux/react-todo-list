import React from "react";
import { useState } from "react";

const Task = ({ task, index, tasks, setTasks }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="task">
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span className={isChecked ? "line-through" : undefined}>{task}</span>
      <button
        onClick={() => {
          const newTasks = [...tasks];
          newTasks.splice(index, 1);
          setTasks(newTasks);
        }}
      >
        🗑
      </button>
    </div>
  );
};

export default Task;
