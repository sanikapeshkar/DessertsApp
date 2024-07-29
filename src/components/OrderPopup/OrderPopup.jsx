import { IoCheckmarkDoneCircle } from "react-icons/io5";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";
import { useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { DessertPageContext } from "../../context/DessertPageContext";
function OrderPopup({
  onClose,
  handleNewOrder,
  totalAmount,
  confirmed,
  onConfirmation,
}) {
  const [edit, setEdit] = useState(false);

  const {cartData}=useContext(DessertPageContext);

  return (
    <div
      className={twMerge(
        "fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center"
      )}
    >
      <div
        className={twMerge(
          "relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-h-[100%] p-8 bg-white rounded-sm overflow-y-auto"
        )}
      >
        {confirmed ? (
          <div className="mb-2">
            <IoCheckmarkDoneCircle
              className="text-green-500 text-4xl mb-2"
              size={30}
            />
            <h3 className="text-black text-3xl font-bold">Order Confirmed</h3>
            <p className="mb-5 mt-2 mx-1 text-slate-400 text-sm">
              We hope you enjoy your food !
            </p>
          </div>
        ) : (
          <div className="flex gap-10  justify-between">
            <p className="font-semibold text-xl mb-5">
              Kindly confirm your order{" "}
            </p>

            <div className="flex gap-5">
              {edit ? (
                <h3
                  onClick={() => setEdit(false)}
                  className="text-slate-600 underline"
                >
                  Save
                </h3>
              ) : (
                <AiFillEdit
                  onClick={() => setEdit(true)}
                  size={35}
                  className="border border-slate-300 rounded-full p-2 "
                />
              )}

              <IoIosClose
                onClick={() => onClose()}
                size={31}
                className="border rounded-full cursor-pointer"
              />
            </div>
          </div>
        )}
        <OrderItem edit={edit} onClose={onClose}/>

        <div className="p-2 flex justify-between bg-rose-50 text-slate-500">
          <h2 className="font-semibold">Order Total :</h2>
          <h2>$ {totalAmount}</h2>
        </div>

        {confirmed ? (
          <div className=" bottom-0 left-0 right-0 mx-2 mt-5 mb-4">
            <Button
              onClick={() => {
                onClose();
                handleNewOrder();
              }}
            >
              Start New Order
            </Button>
          </div>
        ) : (
          <div className="flex gap-5 bottom-0 left-0 right-0 mx-2 mt-5 mb-4 cursor-pointer">
            <Button onClick={() => onConfirmation()}>Confirm my order</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPopup;
