import React, { Component } from "react";
import OrderItem from "../OrderItem/OrderItem";
import { Button } from "../Button/Button";
import OrderPopup from "../OrderPopup/OrderPopup";

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
    const { open } = this.state; 

    return (
      <div className="w-full lg:w-[100%] lg:my-16 md:w-[80%] ">
        <div className="my-5 md:my-2 h-max lg:p-4 md:p-3 sm:p-2 rounded-xl border bg-white">
          <h2 className="text-red-700 lg:text-xl font-bold md:text-lg sm:text-md">
            Your Cart ({count})
          </h2>
          <OrderItem />

          <div className="my-2 p-3 md:p-2 text-md md:text-sm bg-rose-50 rounded-xl">
            This is a carbon neutral delivery
          </div>
        </div>
        {open && <OrderPopup onClose={this.onClose} />}
        <div className="flex justify-center">
          <Button
            onClick={() => {
              this.setState({ open: true });
            }}
          >
            Confirm Your Order
          </Button>
        </div>
      </div>
    );
  }
}

export default YourCart;
