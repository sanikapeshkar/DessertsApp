import { Component } from "react";
import DessertList from "./components/DessertList/DessertList";
import YourCart from "./components/YourCart/YourCart";

class App extends Component {
  render() {
    return (
      <div className="flex px-5 py-5 bg-rose-50">
        <div>
          <h3 className="mx-5 text-3xl text-slate-700">Desserts</h3>

          <DessertList />
        </div>

        <YourCart count={5} />
      </div>
    );
  }
}

export default App;
