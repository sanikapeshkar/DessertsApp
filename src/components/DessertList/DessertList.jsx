import React, { Component } from "react";
import DessertCard from "../DessertCard/DessertCard";
import { DessertPageContext } from "../../context/DessertPageContext";

class DessertList extends Component {
  render() {
    return (
      <DessertPageContext.Consumer>
        {({ dessertData }) => (
          <div className="p-2 flex flex-wrap gap-5">
            {dessertData.map((dessert, i) => (
              <DessertCard
                key={i}
                id={dessert.id}
                src={dessert.imgUrl}
                name={dessert.dessertName}
                desc={dessert.description}
                price={dessert.dessertPrice}
              />
            ))}
          </div>
        )}
      </DessertPageContext.Consumer>
    );
  }
}
export default DessertList;
