/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
export default function TaskRow({ task }) {
  const { name } = task;
  return (
    <div>
      <div className="flex gap-x-2 items-center">
        <p className="bg-white p-1 text-left w-40">{name}</p>
        <div className="bg-[#07bea4] p-1">
          <Icon
            icon="mdi:tick"
            className="text-white text-2xl cursor-pointer"
          />
        </div>
        <div className="bg-[#fa7a46] p-1">
          <Icon
            icon="ion:trash"
            className="text-white text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
