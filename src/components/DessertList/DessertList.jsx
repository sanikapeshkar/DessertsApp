import React, { Component } from "react";
import DessertCard from "../DessertCard/DessertCard";
import { DessertPageContext } from "../../context/DessertPageContext";

class DessertList extends Component {
  render() {
    return (
      <DessertPageContext.Consumer>
        {({ dessertData }) => (
          <div className="p-2 md:p-5 flex flex-wrap lg:gap-2 lg:mx-0 md:gap-1 md:flex-row sm:gap-2 sm:mx-[5%]">
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
