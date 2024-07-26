import React, { useContext } from "react";
import { DessertPageContext } from "../../context/DessertPageContext";
import Counter from "../Counter/Counter";
import AddToCart from "../AddtoCart/AddtoCart";

function DessertCard({ id, src, name, desc, price }) {
  const { count, addToCart, handleDecrement, handleIncrement } =
    useContext(DessertPageContext);

  return (
    <div className="relative lg:min-w-[26%] md:min-w-[26%] mx-2 my-5 rounded-xl md:mx-1 sm:min-w-[80%]">
      <img
        className={`h-[13rem] w-[13rem] rounded-lg ${
          count[id] > 0 ? "border-2 border-red-700" : "border-0"
        }`}
        src={src}
        alt={name}
      />
      {!count[id] ? (
        <AddToCart onClick={() => addToCart(id, 1)}>
          <h2 className="text-md">Add to cart</h2>
        </AddToCart>
      ) : (
        <Counter
          id={id}
          count={count[id]}
          handleDecrement={() => handleDecrement(id)}
          handleIncrement={() => handleIncrement(id)}
        />
      )}
      <h4 className="mt-7 text-gray-400">{name}</h4>
      <p className="my-1 text-gray-900">{desc}</p>
      <h5 className="my-1 text-red-800">$ {price}</h5>
    </div>
  );
}

export default DessertCard;
