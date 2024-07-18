/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TaskRow from "./TaskRow";

export default function TaskContent({ tasks }) {
  return (
    <div className="flex flex-col gap-y-3">
      {tasks.map((t) => (
        <TaskRow task={t} />
      ))}
    </div>
  );
}
