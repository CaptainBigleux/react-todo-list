import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

import "./App.css";
import Paginate from "./components/Paginate";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [maxCountPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="app">
      <Header title="Todo List" />
      <div className="container">
        <div className="task-add-task-holder">
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            tasks={tasks}
            setTasks={setTasks}
          />
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            maxCountPerPage={maxCountPerPage}
            pageNumber={pageNumber}
          />
          <Paginate
            maxCountPerPage={maxCountPerPage}
            tasks={tasks}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
