import { Component } from "react";
import OrderItem from "../OrderItem/OrderItem";

class YourCart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { count } = this.props;
    return (
      <div className=" w-[60%]">
        <div className="my-5 h-max bg-white p-4 rounded-xl border">
          <h2 className="text-red-700 text-xl">Your Cart({count})</h2>
          <OrderItem />

          <div className="my-2 p-3 bg-rose-50 rounded-xl">
 
            This is a carbon neutral delivery
          </div>
        </div>

        <button className=" w-[100%] px-4 py-2 rounded-2xl bg-red-700 text-center text-white">
          Confirm Order
        </button>
      </div>
    );
  }
}
export default YourCart;
