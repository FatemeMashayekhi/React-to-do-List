/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { TaskManager } from "../taskContext";
export default function TaskRow({ task }) {
  const { name, id } = task;
  const { deleteTask } = TaskManager();
  return (
    <div>
      <div className="flex gap-x-2 items-center">
        <p className="bg-white p-1 text-left w-40">{name}</p>

        <button className="bg-[#07bea4] p-1">
          <Icon icon="mdi:tick" className="text-white text-2xl" />
        </button>

        <button className="bg-[#fa7a46] p-1" onClick={() => deleteTask(id)}>
          <Icon icon="ion:trash" className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
}
