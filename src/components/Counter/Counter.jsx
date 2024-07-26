export default function Counter({ count, handleDecrement, handleIncrement }) {
  return (
    <div className="absolute top-48 left-8 w-[60%] px-2 py-2 bg-red-700 flex items-center justify-stretch text-white text-sm rounded-3xl gap-6 text-lg">
      <div
        onClick={handleDecrement}
        className="py-[1px] px-[7.5px] border-[1.5px] border-white flex items-center justify-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer"
      >
        -
      </div>
      <div className="text-center">{count}</div>
      <div
        onClick={handleIncrement}
        className="py-[1.5px] px-[7px] border-[1.5px] flex items-center justify-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer"
      >
        +
      </div>
    </div>
  );
}
