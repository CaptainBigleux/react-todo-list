import React from "react";

const Task = ({ task, index, tasks, setTasks }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        value={task.isChecked}
        checked={task.isChecked ? true : false}
        onChange={() => {
          const newTasks = [...tasks];
          const t = newTasks.find((el) => el.text === task.text);
          t.isChecked = !t.isChecked;
          setTasks(newTasks);
        }}
      />
      <span className={task.isChecked ? "line-through" : null}>
        {task.text}
      </span>
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
