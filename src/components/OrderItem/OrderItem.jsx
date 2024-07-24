import { IoIosCloseCircleOutline } from "react-icons/io";

function OrderItem() {
  return (
    <div className="flex my-1 p-2 border-b-2 rounded-lg gap-36">
      <div className="">
        <h3>Item name </h3>
        <p className="text-red-700 text-sm">1 X quantity</p>
      </div>
      
      <IoIosCloseCircleOutline className="m-2 align-right" />
    </div>
  );
}

export default OrderItem;
