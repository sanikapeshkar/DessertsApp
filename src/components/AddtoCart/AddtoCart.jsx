import { IoCartOutline } from "react-icons/io5";

function AddtoCart({ children }) {
  return (
    <button className="absolute top-48 left-10  bg-white flex gap-2 px-4 py-2 rounded-3xl border-2 border-red-600 items-center">
      <IoCartOutline />
      {children}
    </button>
  );
}

export default AddtoCart;
