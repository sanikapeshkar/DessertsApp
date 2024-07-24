import { Component } from "react";
import { DESSERTS } from "../../DessertData";
import DessertCard from "../DessertCard/DessertCard";

class DessertList extends Component {
  render() {
    return (
      <div
        className="p-2 flex
flex-wrap gap-5"
      >
        {DESSERTS.map((dessert, i) => {
          return (
            <DessertCard
              src={dessert.imgUrl}
              name={dessert.dessertName}
              desc={dessert.description}
              price={dessert.dessertPrice}
            />
          );
        })}
      </div>
    );
  }
}
export default DessertList;
