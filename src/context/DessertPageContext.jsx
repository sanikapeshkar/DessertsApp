import React, { Component, createContext } from "react";
import { DESSERTS } from "../DessertData";

export const DessertPageContext = createContext();

class DessertPageContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dessertData: DESSERTS,
      cartData: [],
    };
  }

  addToCart = (id, count) => {
    const newData = this.state.cartData.filter((f) => f._id === id);
    const dataWithQuantity = {
      ...newData,
      quantity: count,
    };
    this.setState((prevState) => ({
      cartData: [...prevState.cartData, dataWithQuantity],
    }));
  };
  removeFromCart = (id) => {
    const newData = this.state.cartData.filter((f) => f._id !== id);
    this.setState((prevState) => ({
      cartData: newData,
    }));
  };

  render() {
    return (
      <DessertPageContext.Provider
        value={{
          dessertData: this.state.dessertData,
          cartData: this.state.cartData,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
        }}
      >
        {this.props.children}
      </DessertPageContext.Provider>
    );
  }
}

export default DessertPageContextProvider;
