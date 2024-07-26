import { IoCheckmarkDoneCircle } from "react-icons/io5";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";

function OrderPopup({ onClose ,handleNewOrder }) {
  return (
    <div
      className={twMerge("fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center")}
    >
      <div className={twMerge("relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-h-[100%] p-4 bg-white rounded-sm overflow-y-auto")}>
        <IoCheckmarkDoneCircle className="text-green-500 text-4xl mb-4" />
        <h3 className="text-black text-3xl font-bold">Order Confirmed</h3>
        <p className="my-1 mx-1 text-slate-400 text-md font-normal">Hope you enjoyed your food!</p>
        <OrderItem />
        <div className="absolute bottom-0 left-0 right-0 mx-5 mt-5 mb-1">
          <Button onClick={()=>{onClose();handleNewOrder();}}>Start New Order</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderPopup;
