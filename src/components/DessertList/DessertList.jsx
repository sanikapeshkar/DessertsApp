import { DESSERTS } from "../../DessertData";
import DessertCard from "../DessertCard/DessertCard";

function DessertList() {
  return (
    <div
      className="p-2 flex
flex-wrap gap-5"
    >
      {DESSERTS.map((dessert) => {
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

export default DessertList;
