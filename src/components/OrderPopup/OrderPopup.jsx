import { IoCheckmarkDoneCircle } from "react-icons/io5";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";

function OrderPopup({ onClose }) {
  return (
    <div
      className={twMerge("absolute top-0 left-0 bg-black bg-opacity-25 h-[99vh] w-[98.5vw]")}
    >
      <div className={twMerge("relative my-[5%] mx-auto w-[50%] h-[75%] p-4 bg-white rounded-sm")}>
        <IoCheckmarkDoneCircle className="text-green-500 text-4xl mb-4" />
        <h3 className="text-black text-3xl font-bold">Order Confirmed</h3>
        <p className="my-1 mx-1 text-slate-400 text-md font-normal">Hope you enjoyed your food!</p>
        <OrderItem />
        <div className="absolute bottom-0 mx-5 my-5 w-[85%]">
          <Button onClick={onClose}>Start New Order</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderPopup;
