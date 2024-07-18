import AddInput from "./AddInput";
import SelectBox from "./SelectBox";

export default function Header() {
  return (
    <div className="flex gap-x-2">
      <AddInput />
      <SelectBox />
    </div>
  );
}
