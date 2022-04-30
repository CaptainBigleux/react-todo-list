import React from "react";

export const SearchTask = ({
  darkMode,
  tasks,
  maxCountPerPage,
  searchTask,
  setSearchTask,
}) => {
  if (tasks.length / maxCountPerPage <= 1) return null;
  else
    return (
      <div className={darkMode ? "searchTask-dark" : "searchTask"}>
        <input
          className="search-task-input"
          type="text"
          placeholder="Search task"
          value={searchTask}
          onChange={(event) => {
            setSearchTask(event.target.value);
          }}
        />
      </div>
    );
};

export default SearchTask;
