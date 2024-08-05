import { IoCheckmarkDoneCircle } from "react-icons/io5";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";
import { useContext, useState } from "react";

import { IoIosClose } from "react-icons/io";
import { Alert } from "antd";
import { useClickOutside } from "../../customHooks/useClickOutside";
import { DessertPageContext } from "../../context/DessertPageContext";
function OrderPopup({
  closePopup,
  handleNewOrder,
  totalAmount,
  confirmed,
  onConfirmation,
  open,
}) {
  const [edit, setEdit] = useState(true);
  const { alert, handleAlert } = useContext(DessertPageContext);

  let domNode = useClickOutside(() => {
    closePopup();
  });

  return (
    <div
      className={twMerge(
        "z-20 fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center"
      )}
    >
      <div
        ref={domNode}
        className={twMerge(
          "relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-h-[95%] p-8 bg-white rounded-md "
        )}
      >
     
        {confirmed ? (
          <div className="flex justify-between mb-2">
            <div>
              <IoCheckmarkDoneCircle
                className="text-green-500 text-4xl mb-2"
                size={30}
              />
     
              <h3 className="text-black text-3xl font-bold">Order Confirmed</h3>
              <p className="mb-5 mt-2 mx-1 text-slate-400 text-sm">
                We hope you enjoy your food !
              </p>
              {alert && <Alert message={alert} type="success" closable />}
            </div>
            <IoIosClose
              onClick={() => {
                handleNewOrder();
                closePopup();
              }}
              size={31}
              className="border rounded-full cursor-pointer"
            />
          </div>
        ) : (
          <>
                      {alert && <Alert message={alert} type="warning" closable  className=" top-0 right-0  my-2 "/>}
       
          <div className="flex gap-10  justify-between">
            <p className="font-semibold text-xl mb-5">
              Kindly confirm your order{" "}
            </p>

            <div className="flex gap-5">
              <IoIosClose
                onClick={() => closePopup()}
                size={31}
                className="border rounded-full cursor-pointer"
              />
            </div>
          </div>
          </>
        )}
        <OrderItem edit={edit} closePopup={closePopup} open={open} />

        <div className="p-2 flex justify-between bg-rose-50 text-slate-500">
          <h2 className="font-semibold">Order Total :</h2>
          <h2>$ {totalAmount}</h2>
        </div>

        {confirmed ? (
          <div className=" bottom-0 left-0 right-0 mx-2 mt-5 mb-4">
            <Button
              onClick={() => {
                closePopup();
                handleNewOrder();
              }}
            >
              Start New Order
            </Button>
          </div>
        ) : (
          <div className="flex gap-5 bottom-0 left-0 right-0 mx-2 mt-5 mb-4 cursor-pointer">
            <Button
              onClick={() => {
                onConfirmation();
                handleAlert("Your Order is confirmed");
                setEdit(false);
              }}
            >
              Confirm my order
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPopup;
