import React, { Component, createContext } from "react";
import { DESSERTS } from "../DessertData";

export const DessertPageContext = createContext();

class DessertPageContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dessertData: DESSERTS,
      cartData: [],
      count: {},
    };
  }

  handleIncrement = (id) => {
    const increementedItem = this.state.cartData.find(
      (item) => item._id === id
    );

    if (increementedItem) {
      this.setState({
        cartData: this.state.cartData.map((item) =>
          item._id === id
            ? { ...item, quantity: increementedItem.quantity + 1 }
            : item
        ),
        count: { ...this.state.count, [id]: increementedItem.quantity + 1 },
      });
    } else {
      const newItem = this.state.dessertData.find((item) => item._id === id);
      this.setState({
        cartData: [...this.state.cartData, { ...newItem, quantity: 1 }],
        count: { ...this.state.count, [id]: 1 },
      });
    }
  };

  handleDecrement = (id) => {
    const decreementedItem = this.state.cartData.find(
      (item) => item._id === id
    );
    if (decreementedItem) {
      this.setState({
        cartData: this.state.cartData.map((item) =>
          item._id === id
            ? { ...item, quantity: decreementedItem.quantity - 1 }
            : item
        ),
        count: { ...this.state.count, [id]: decreementedItem.quantity - 1 },
      });

      //check if decreemented quantity is 0
      if (decreementedItem.quantity - 1 < 1) {
        this.setState({
          count: { ...this.state.count, [id]: decreementedItem.quantity - 1 },
        });
        this.removeFromCart(id);
      }
    }
  };

  removeFromCart = (id) => {
    const itemInCart = this.state.cartData.find((item) => item._id === id);
    let newCartData;

    if (itemInCart) {
      newCartData = this.state.cartData.filter((item) => item._id !== id);
    } else {
      newCartData = this.state.cartData;
    }

    this.setState({
      cartData: newCartData,
      count: { ...this.state.count, [id]: 0 },
    });
  };

  handleNewOrder = () => {
    this.setState({
      cartData: [],
      count: {},
    });
  };

  render() {
    return (
      <DessertPageContext.Provider
        value={{
          dessertData: this.state.dessertData,
          cartData: this.state.cartData,
          count: this.state.count,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          handleIncrement: this.handleIncrement,
          handleDecrement: this.handleDecrement,
          handleNewOrder: this.handleNewOrder,
        }}
      >
        {this.props.children}
      </DessertPageContext.Provider>
    );
  }
}

export default DessertPageContextProvider;
