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
    const itemInCart = this.state.cartData.find((item) => item._id === id);
    let newCount;

    if (itemInCart) {
      newCount = itemInCart.quantity + 1;
    } else {
      const newItem = this.state.dessertData.find((item) => item._id === id);
      newCount = 1;
    }

    this.addToCart(id, newCount);
  };

  handleDecrement = (id) => {
    const itemInCart = this.state.cartData.find((item) => item._id === id);
    let newCount;

    if (itemInCart) {
      newCount = itemInCart.quantity - 1;
      if (newCount < 1) { 
        this.setState({
          count: { ...this.state.count, [id]: newCount },
        });
        this.removeFromCart(id);
      } else {
        this.addToCart(id, newCount);
      }
    } else {
      newCount = 1;
    }
  };

  addToCart = (id, count) => {

        const itemInCart = this.state.cartData.find((item) => item._id === id);
    const newItem = this.state.dessertData.find((item) => item._id === id);
    let newCartData, newCount;

    if (itemInCart ) {
      newCount = count;
      newCartData = this.state.cartData.map((item) =>
        item._id === id ? { ...item, quantity: newCount } : item
      );
    } else {
      newCount = count;
      newCartData = [
        ...this.state.cartData,
        { ...newItem, quantity: newCount },
      ];
    }

    this.setState({
      cartData: newCartData,
      count: { ...this.state.count, [id]: newCount },
    });
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
