import data from "../data.js";
import "./App.css";
import MainTasks from "./components/MainTasks";

function App() {
  return (
    <>
      <MainTasks tasks={data} />
    </>
  );
}

export default App;
