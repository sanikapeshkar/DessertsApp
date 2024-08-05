import { IoCartOutline } from "react-icons/io5";

function AddToCart({ children,onClick }) {

  return (
    <button onClick={onClick} className="font-redhat absolute top-48 lg:left-8 md:left-8 sm:left-6 bg-white flex gap-2 px-4 py-2 rounded-3xl border-2 border-red-600 items-center">
      <IoCartOutline className="text-xl" />
      {children}
    </button>
  );
}

export default AddToCart;


