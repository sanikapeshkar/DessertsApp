export default function Counter({
  id,
  count,
  handleDecrement,
  handleIncrement,
  editCounter,
}) {
  const counterStyles =
    "py-[1px] px-[7.5px] border-[1.5px] border-white flex items-center justify-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer";
  const EditingCounterStyle =
    "py-[1px] px-[7.5px] border-[1.5px] border-red-600 flex items-center justify-center bg-white text-red-600 rounded-full cursor-pointer";

  return (
    <div
      className={
        !editCounter
          ? "absolute top-48 left-8 w-100 px-2 py-2 bg-red-700 flex items-center justify-stretch text-white text-sm rounded-3xl gap-6 text-lg"
          : "bg-white rounded-full scale-80 border p-1 flex gap-5"
      }
    >
      <div
        onClick={() => {
          editCounter && count <= 1 ? {} : handleDecrement(id);
        }}
        className={editCounter ? counterStyles : EditingCounterStyle}
      >
        -
      </div>
      <div className="text-center">{count}</div>
      <div
        onClick={() => handleIncrement(id)}
        className={editCounter ? counterStyles : EditingCounterStyle}
      >
        +
      </div>
    </div>
  );
}
