function OrderItem() {
  return (
    <div className="flex gap-32 my-1 p-2 border-b-2 rounded-lg">
      <div className="">
 
        <h3>Item name </h3>
        <p className="text-red-700 text-sm">1 X quantity</p>
      </div>
      <button className="h-5 w-5 px-2  border border-2 border-black rounded-full text-sm text-center">
        X
      </button>
    </div>
  );
}

export default OrderItem;
