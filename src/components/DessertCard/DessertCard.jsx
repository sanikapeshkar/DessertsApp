import React, { Component } from "react";
import { DessertPageContext } from "../../context/DessertPageContext";
import Counter from "../Counter/Counter";
import AddToCart from "../AddtoCart/AddtoCart";

class DessertCard extends Component {
  static contextType = DessertPageContext;

  constructor(props) {
    super(props);
    this.state = {
      showAddToCart: true,
    };

    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    this.setState({ showAddToCart: true });
  }

  componentWillUnmount() {
    // Removing setState in componentWillUnmount to avoid errors.
  }

  renderButtons(showAddToCart, count, id) {
    const { handleIncrement, handleDecrement } = this.context;
    if (showAddToCart && !count[id]) {
      return (
        <AddToCart onClick={() => handleIncrement(id)}>
          <h2 className="text-md">Add to cart</h2>
        </AddToCart>
      );
    } else {
      return (
        <Counter
          id={id}
          count={count[id]}
          handleDecrement={() => handleDecrement(id)}
          handleIncrement={() => handleIncrement(id)}
          editCounter={false}
        />
      );
    }
  }

  render() {
    const { id, src, name, desc, price } = this.props;
    const { count } = this.context;
    const { showAddToCart } = this.state;

    return (
      <div className="font-redhat relative lg:min-w-[26%] md:min-w-[26%] mx-2 my-5 rounded-xl md:mx-1 sm:min-w-[80%]">
        <img
          className={`h-[13rem] w-[13rem] rounded-lg ${
            count[id] > 0 ? "border-2 border-red-700" : "border-0"
          }`}
          loading="lazy"
          src={src}
          alt={name}
        />
        {this.renderButtons(showAddToCart, count, id)}
        <h4 className="mt-7 text-gray-400">{name}</h4>
        <p className="my-1 text-gray-900">{desc}</p>
        <h5 className="my-1 text-red-800">$ {price}</h5>
      </div>
    );
  }
}

export default DessertCard;
