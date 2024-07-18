export default function SelectBox() {
  return (
    <div>
      <select name="select-box" id="select-box" className="p-2">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">unDone</option>
      </select>
    </div>
  );
}
