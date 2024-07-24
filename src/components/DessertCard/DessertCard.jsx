import React, { useState } from "react";
import Counter from "../Counter/Counter";
import AddToCart from "../AddtoCart/AddtoCart";

function DessertCard({ src, name, desc, price }) {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className={`relative w-[26%] mx-2 my-5 rounded-xl `}>
      <img
        className={`h-[13rem] rounded-lg ${
          count > 0 ? "border-2 border-red-700" : "border-0"
        }`}
        src={src}
        alt={name}
      />
      {!count && (
        <AddToCart
          onClick={() => {
            setCount(1);
          }}
        >
          <h2 className="text-md">Add to cart</h2>
        </AddToCart>
      )}
      {count > 0 && (
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
