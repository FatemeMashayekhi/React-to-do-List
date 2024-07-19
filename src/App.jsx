import { useContext } from "react";
import data from "../data.js";
import "./App.css";
import MainTasks from "./components/MainTasks";
import TaskContent from "./components/TaskContent.jsx";
import { TaskContext, TaskManeger } from "./taskContext.jsx";


function App() {
  const {tasks} =TaskManeger()
  console.log(tasks);
  return (
    <>
      <MainTasks tasks={tasks} />
    </>
  );
}

export default App;
