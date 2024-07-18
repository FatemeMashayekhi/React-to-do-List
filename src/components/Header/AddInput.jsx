import { Icon } from "@iconify/react";
export default function AddInput() {
  return (
    <>
      <label htmlFor="add">
        <input type="text" id="add" placeholder="Add Todo Here" />
        <Icon icon="ph:plus-fill" />
      </label>
    </>
  );
}
