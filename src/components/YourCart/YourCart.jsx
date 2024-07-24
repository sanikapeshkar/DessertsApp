import React, { Component } from "react";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import OrderPopup from '../OrderPopup/OrderPopup';

class YourCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    // Bind the method in the constructor
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { count } = this.props;
    const { open } = this.state; // Access state correctly

    return (
      <div className="w-[60%]">
        <div className="my-5 h-max p-4 rounded-xl border bg-white">
          <h2 className="text-red-700 text-xl">Your Cart({count})</h2>
          <OrderItem />

          <div className="my-2 p-3 bg-rose-50 rounded-xl">
            This is a carbon neutral delivery
          </div>
        </div>
        {open && <OrderPopup onClose={this.onClose} />}
        <Button
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          Confirm Your Order
        </Button>
      </div>
    );
  }
}
export default YourCart;
