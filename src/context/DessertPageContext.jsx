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
    this.setState((prevState) => {
      const itemInCart = prevState.cartData.find((item) => item._id === id);

      if (itemInCart) {
        return {
          cartData: prevState.cartData.map((item) =>
            item._id === id ? { ...item, quantity: count } : item
          ),
        };
      } else {
        const newItem = this.state.dessertData.find((item) => item._id === id);
        return {
          cartData: [...prevState.cartData, { ...newItem, quantity: count }],
        };
      }
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cartData: prevState.cartData.filter((item) => item._id !== id),
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
