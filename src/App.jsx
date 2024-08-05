import { Component } from "react";
import DessertList from "./components/DessertList/DessertList";
import YourCart from "./components/YourCart/YourCart";
import DessertPageContextProvider from "./context/DessertPageContext";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartVisible: false,
    };
  }

  toggleCartVisibility = () => {
    this.setState((prevState) => ({
      isCartVisible: !prevState.isCartVisible,
    }));
  };

  render() {
    const { isCartVisible } = this.state;

    return (
      <DessertPageContextProvider>
        <div className="top-0 bottom-0  font-redhat flex sm:flex-col sm:px-10 lg:flex-row px-5 py-5 bg-rose-50">
          <div className="lg:w-4/6 mb-5 lg:mb-0">
            <div className="flex justify-between">
              <h3 className="mx-5 text-3xl text-slate-700">Desserts</h3>
              <FaShoppingCart
                size={35}
                className="lg:hidden sm:block cursor-pointer"
                onClick={this.toggleCartVisibility}
              />
            </div>
            <DessertList />
          </div>
          <div
            className={` inset-0 w-full  lg:w-2/6 md:px-40 sm:w-6/6 sm:fixed sm:bg-black sm:bg-opacity-25  sm:px-6 sm:py-20  ${
              isCartVisible ? "sm:block md:block" : "sm:hidden md:hidden"
            }  lg:relative lg:w-2/6 lg:bg-transparent lg:bg-opacity-100 lg:px-0 lg:py-0 lg:block flex items-center justify-center`}
          >
            <div className=" md:w-[50%] lg:bg-transparent lg:px-0 sm:bg-white sm:mx-2 sm:px-1 sm:py-4 sm:rounded-md ">
            <YourCart count={5} />
            <IoIosClose size={25} color='#adadad' className="z-5 absolute top-1 right-1 sm:block lg:hidden cursor-pointer " onClick={this.toggleCartVisibility}/>
            </div>
          </div>
        </div>
      </DessertPageContextProvider>
    );
  }
}

export default App;
