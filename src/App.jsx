import "./App.css";
import MainTasks from "./components/MainTasks";

import { TaskManager } from "./taskContext.jsx";

function App() {
  const { tasks } = TaskManager();
  console.log(tasks);
  return (
    <>
      <MainTasks tasks={tasks} />
    </>
  );
}

export default App;
