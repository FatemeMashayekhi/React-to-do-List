/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { TaskManeger } from "../../taskContext";
export default function AddInput() {
  const [inputValue, setInputValue] = useState("");
  const {createNew} =TaskManeger()
  return (
    <>
      <div className="w-52 relative">
        <input
          type="text"
          id="add"
          placeholder="Add Todo Here"
          className="p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            createNew({
                  name: inputValue,
                  is_Done: false,
                  id: +new Date(),
                })
            // setTasks((prevState) => {
            //   return [
            //     ...prevState,
            //     {
            //       name: inputValue,
            //       is_Done: false,
            //       id: +new Date(),
            //     },
            //   ];
            // });
            setInputValue("");
          }}
        >
          <Icon
            icon="ph:plus-fill"
            className="absolute right-5 top-1 size-8 text-[#fa7a46]"
          />
        </button>
      </div>
    </>
  );
}
