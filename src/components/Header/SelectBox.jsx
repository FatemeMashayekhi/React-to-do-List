import { TaskManager } from "../../taskContext";

export default function SelectBox() {
  const { filterTasks } = TaskManager();
  return (
    <div>
      <select
        name="select-box"
        id="select-box"
        className="p-2"
        onChange={(e) => filterTasks(e.target.value)}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">unDone</option>
      </select>
    </div>
  );
}
