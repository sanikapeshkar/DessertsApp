export default function Counter({ count }) {
  return (
    <div className="absolute top-48 left-12 w-[60%] px-2 py-2 bg-red-700 flex text-white text-sm rounded-3xl align-items-center gap-8 text-lg text-center">
      <div className="w-7 px-2 py-1 text-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer">
        -
      </div>
      <div className="text-center">{count}</div>
      <div className="w-7 px-2 text-center bg-red-600 hover:bg-white text-white hover:text-red-600 rounded-full cursor-pointer">
        +
      </div>
    </div>
  );
}
