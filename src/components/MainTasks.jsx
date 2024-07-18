/* eslint-disable react/prop-types */
import Header from "./Header/Header";
import TaskContent from "./TaskContent";

export default function MainTasks({ tasks }) {
  return (
    <div className="bg-[#1b99e5] flex flex-col justify-center items-center gap-y-4 p-3">
      <p className="font-semibold text-2xl text-white">Tasks</p>
      <Header />
      <TaskContent tasks={tasks} />
    </div>
  );
}
