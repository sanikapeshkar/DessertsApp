import { Component } from "react";
import AddtoCart from "../AddtoCart/AddtoCart";
import Counter from "../Counter/Counter";

function DessertCard({ src, name, desc, price }) {
  return (
    <div className="relative w-[26%]  mx-2 my-5 rounded-xl">
      <img className="h-[13rem] rounded-lg" src={src} alt="image here" />
      {/* <AddtoCart>
        <h2 className="text-md">Add to cart</h2>
      </AddtoCart> */}
      <Counter count={3} />
      <h4 className="mt-7 text-gray-400">{name}</h4>
      <p className="my-1 text-gray-900">{desc}</p>
      <h5 className="my-1 text-red-800">$ {price}</h5>
    </div>
  );
}
export default DessertCard;
