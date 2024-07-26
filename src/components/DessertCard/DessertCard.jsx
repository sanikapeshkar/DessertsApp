import React, { useState, useContext } from "react";
import { DessertPageContext } from "../../context/DessertPageContext";
import Counter from "../Counter/Counter";
import AddToCart from "../AddtoCart/AddtoCart";

function DessertCard({ id, src, name, desc, price }) {
  
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useContext(DessertPageContext);

  function handleDecrement() {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      if (newCount === 0) {
        removeFromCart(id,count);
      } else {
        addToCart(id, newCount);
      }
      return newCount;
    });
  }

  function handleIncrement() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      addToCart(id, newCount);
      return newCount;
    });
  }

  return (
    <div
      className={`relative lg:min-w-[26%] md:min-w-[26%] mx-2 my-5 rounded-xl md:mx-1 sm:min-w-[80%]`}
    >
      <img
        className={`h-[13rem] w-[13rem] rounded-lg ${
          count > 0 ? "border-2 border-red-700" : "border-0"
        }`}
        src={src}
        alt={name}
      />
      {!count ? (
        <AddToCart
          onClick={() => {
            setCount(1);
            addToCart(id, 1);
          }}
        >
          <h2 className="text-md">Add to cart</h2>
        </AddToCart>
      ) : (
        <Counter
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
      <h4 className="mt-7 text-gray-400">{name}</h4>
      <p className="my-1 text-gray-900">{desc}</p>
      <h5 className="my-1 text-red-800">$ {price}</h5>
    </div>
  );
}

export default DessertCard;
