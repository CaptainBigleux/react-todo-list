import React from "react";
import Task from "./Task";

const Tasks = ({
  tasks,
  setTasks,
  maxCountPerPage,
  pageNumber,
  darkMode,
  searchTask,
}) => {
  const filteredTasks = [];
  //if user is searching for tasks don't display the normal filtered tasks
  if (searchTask === "")
    for (let i = (pageNumber - 1) * maxCountPerPage; i < tasks.length; i++) {
      if (filteredTasks.length < maxCountPerPage) filteredTasks.push(tasks[i]);
    }
  else {
    for (let i = 0; i < tasks.length; i++) {
      if (
        filteredTasks.length < maxCountPerPage &&
        tasks[i].text.indexOf(searchTask) !== -1
      )
        filteredTasks.push(tasks[i]);
    }
  }
  return (
    <div className="tasks-holder">
      {filteredTasks.map((task, index) => {
        return (
          <Task
            key={index}
            index={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            darkMode={darkMode}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
