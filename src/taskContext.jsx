import { createContext, useContext, useState } from "react";
import data from "../data";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
const [tasks, setTasks] = useState(data);
const [filterValue, setFilterValue ]= useState()
const createNew = (newTask) => {
//setTasks ([...tasks, newTask]);
setTasks ((prevTask) => {
    return [...prevTask, newTask]
})
};

const deleteTask = (id) => {
setTasks(tasks.filter((p) => p.id !== id));
};

    const filterTasks = (value) => {
        setFilterValue(value)
}

return (
<TaskContext.Provider value={{ tasks, createNew, deleteTask,filterTasks,filterValue }}>
{children}
</TaskContext.Provider>
)};


export function TaskManeger () {
    return useContext(TaskContext)
}