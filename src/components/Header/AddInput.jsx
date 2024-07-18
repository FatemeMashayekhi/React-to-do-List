import { Icon } from "@iconify/react";
export default function AddInput() {
  return (
    <>
      <div className="w-52 relative">
        <input
          type="text"
          id="add"
          placeholder="Add Todo Here"
          className="p-2"
        />
        <Icon
          icon="ph:plus-fill"
          className="absolute right-5 top-1 size-8 text-[#fa7a46]"
        />
      </div>
    </>
  );
}
