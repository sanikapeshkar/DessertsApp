import { Component } from "react";
import DessertList from "./components/DessertList/DessertList";
import YourCart from "./components/YourCart/YourCart";
import DessertPageContextProvider from "./context/DessertPageContext";

class App extends Component {
  render() {
    return (
      <DessertPageContextProvider>
        <div className="flex flex-col lg:flex-row px-5 py-5 bg-rose-50">
          <div className="lg:w-4/6 mb-5 lg:mb-0">
            <h3 className="mx-5 text-3xl text-slate-700">Desserts</h3>
            <DessertList />
          </div>
          <div className="lg:w-2/6">
            <YourCart count={5} />
          </div>
        </div>
      </DessertPageContextProvider>
    );
  }
}

export default App;
