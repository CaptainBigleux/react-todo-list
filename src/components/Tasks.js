import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, setTasks, maxCountPerPage, pageNumber }) => {
  const filteredTasks = [];
  for (let i = (pageNumber - 1) * maxCountPerPage; i < tasks.length; i++) {
    if (filteredTasks.length < maxCountPerPage) filteredTasks.push(tasks[i]);
  }
  return (
    <>
      {filteredTasks.map((task, index) => {
        return (
          <Task
            key={index}
            index={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </>
  );
};

export default Tasks;
