/* eslint-disable react/prop-types */
import AddInput from "./AddInput";
import SelectBox from "./SelectBox";

export default function Header({ setTasks }) {
  return (
    <div className="flex gap-x-2">
      <AddInput setTasks={setTasks} />
      <SelectBox />
    </div>
  );
}
