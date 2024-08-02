import { IoIosCloseCircleOutline } from "react-icons/io";
import { DessertPageContext } from "../../context/DessertPageContext";
import Counter from "../Counter/Counter";
import { useContext } from "react";

function OrderItemList({ edit, closePopup, open }) {
  const { cartData, removeFromCart, count, handleDecrement, handleIncrement } =
    useContext(DessertPageContext);

  return (
    <div className=" h-max flex flex-col max-h-[30vh] overflow-y-scroll ">
      {cartData.length > 0 &&
        cartData.map((orderItem) => (
          <div
            key={orderItem._id}
            className="flex justify-between items-center bg-rose-50  border-b p-2 rounded-sm"
          >
            <div className="flex gap-4 align-center">
              <img src={orderItem.imgUrl} className="h-16 w-16"></img>
              <div>
                <h3 className="font-semibold">{orderItem.dessertName}</h3>
                <div className="flex gap-1">
                  <p className="text-red-700 font-bold text-sm">
                    {orderItem.quantity}x
                  </p>
                  <div className="flex gap-10 text-slate-400 text-sm italic font-semibold">
                    <h4>
                      @ $
                      {(orderItem.quantity * orderItem.dessertPrice).toFixed(2)}
                    </h4>
               
                    {edit && open && (
                      <Counter
                        id={orderItem._id}
                        count={count[orderItem._id]}
                        handleDecrement={() => handleDecrement(orderItem._id)}
                        handleIncrement={() => handleIncrement(orderItem._id)}
                        editCounter={edit}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
        
            {edit&&  <IoIosCloseCircleOutline
                className="m-2 cursor-pointer"
                onClick={() => {
                  if (cartData.length === 1) {
                    removeFromCart(orderItem._id);
                    closePopup();
                  } else {
                    removeFromCart(orderItem._id);
                  }
                }}
              />}
         
          </div>
        ))}
    </div>
  );
}

export default OrderItemList;
