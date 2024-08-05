import { useState } from "react";

export default function Counter({
  id,
  count,
  handleDecrement,
  handleIncrement,
  editCounter,
}) {
  const counterStyles =
    "h-8 w-8 py-[1px] px-[10px] border-[1.5px] border-white flex items-center justify-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer";
  const editingCounterStyle =
    " h-7 w-7 py-[1px] px-[0.5px] border-[1.5px] border-red-600 flex items-center justify-center bg-white text-red-600 rounded-full cursor-pointer";

  function getCounterStyle() {
    return editCounter ? counterStyles : editingCounterStyle;
  }

  return (
    <div
      className={
        editCounter
          ? "bg-white rounded-full md:scale-50 sm:scale-50  border py-4 px-3 flex lg:gap-7 sm:gap-10 sm:text-xl"
          : "absolute top-48 sm:left-7 md:left-10 w-100 mx-2 px-2 py-2 bg-red-700 flex items-center justify-stretch text-white text-sm rounded-3xl gap-6 text-lg gap-10"
      }
    >
      <div
        onClick={() => {
          if (editCounter && count <= 1) return;
          handleDecrement(id);
        }}
        className={getCounterStyle()}
      >
        -
      </div>
      <div className="text-center">{count}</div>
      <div
        onClick={() => handleIncrement(id)}
        className={getCounterStyle()}
      >
        +
      </div>
    </div>
  );
}
