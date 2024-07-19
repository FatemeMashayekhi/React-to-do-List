/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Header/Header";
import TaskContent from "./TaskContent";
import { TaskManeger } from "../taskContext";

export default function MainTasks() {
  const {tasks, filterValue} =TaskManeger()
  return (
    <div className="bg-[#1b99e5] flex flex-col justify-center items-center gap-y-4 p-3">
      <p className="font-semibold text-2xl text-white">Tasks</p>
      <Header />
      <TaskContent tasks={filterValue === "done"
  ? tasks.filter((task) => task.is_Done)
  : filterValue === "undone"
  ? tasks.filter((task) => !task.is_Done)
  : tasks} />
      </div>
  );
}
