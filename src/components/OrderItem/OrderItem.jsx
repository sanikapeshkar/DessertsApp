import { IoIosCloseCircleOutline } from "react-icons/io";
import { DessertPageContext } from "../../context/DessertPageContext";

function OrderItemList() {

  return (
    <DessertPageContext.Consumer>
      {({ cartData,removeFromCart }) => (
        <div className="flex flex-col my-1 p-2 border-b-2 rounded-lg gap-2">
          {cartData.map((orderItem) => (
            <div key={orderItem._id} className="flex justify-between items-center">
              <div>
                <h3>{orderItem.dessertName}</h3>
                <p className="text-red-700 text-sm">1 X {orderItem.quantity}</p>
              </div>
              <IoIosCloseCircleOutline
                className="m-2 cursor-pointer"
                onClick={() => removeFromCart(orderItem._id)}
              />
            </div>
          ))}
        </div>
      )}
    </DessertPageContext.Consumer>
  );
}

export default OrderItemList;
