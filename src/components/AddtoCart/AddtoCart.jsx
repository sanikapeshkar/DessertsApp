import { IoCartOutline } from "react-icons/io5";

function AddToCart({ children,onClick }) {
  return (
    <button onClick={onClick} className="absolute top-48 left-8 bg-white flex gap-2 px-4 py-2 rounded-3xl border-2 border-red-600 items-center">
      <IoCartOutline className="text-xl" />
      {children}
    </button>
  );
}

export default AddToCart;
