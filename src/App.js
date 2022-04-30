import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import SearchTask from "./components/SearchTask";

import "./App.css";
import Paginate from "./components/Paginate";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faListCheck,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
library.add(faListCheck, faCircleHalfStroke);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [maxCountPerPage] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTask, setSearchTask] = useState("");

  return (
    <div className={darkMode ? "app-dark" : "app"}>
      <Header title="Todo List" darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={darkMode ? "container-dark" : "container"}>
        <div className="app-main-holder">
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            tasks={tasks}
            setTasks={setTasks}
            darkMode={darkMode}
          />
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            maxCountPerPage={maxCountPerPage}
            pageNumber={pageNumber}
            darkMode={darkMode}
            searchTask={searchTask}
          />
          <Paginate
            maxCountPerPage={maxCountPerPage}
            tasks={tasks}
            setTasks={setTasks}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            darkMode={darkMode}
            searchTask={searchTask}
          />
        </div>
        <SearchTask
          maxCountPerPage={maxCountPerPage}
          tasks={tasks}
          darkMode={darkMode}
          searchTask={searchTask}
          setSearchTask={setSearchTask}
        />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
