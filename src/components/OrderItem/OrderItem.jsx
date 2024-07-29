import { IoIosCloseCircleOutline } from "react-icons/io";
import { DessertPageContext } from "../../context/DessertPageContext";
import Counter from "../Counter/Counter";

function OrderItemList({ edit, onClose }) {
  return (
    <DessertPageContext.Consumer>
      {({
        cartData,
        removeFromCart,
        count,
        handleDecrement,
        handleIncrement,
      }) => (
        <div className=" h-max flex flex-col ">
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
                          @ ${orderItem.quantity * orderItem.dessertPrice}
                        </h4>
                        {edit && (
                          <Counter
                            id={orderItem._id}
                            count={count[orderItem._id]}
                            handleDecrement={() =>
                              handleDecrement(orderItem._id)
                            }
                            handleIncrement={() =>
                              handleIncrement(orderItem._id)
                            }
                            editCounter={edit}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {edit && (
                  <IoIosCloseCircleOutline
                    className="m-2 cursor-pointer"
                    onClick={() => {
                      if (cartData.length === 1) {
                        removeFromCart(orderItem._id);
                        onClose();
                      } else {
                        removeFromCart(orderItem._id);
                      }
                    }}
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </DessertPageContext.Consumer>
  );
}

export default OrderItemList;
