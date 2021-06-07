import React, { Component, createContext } from "react";

export const ProductTechnicalDetailsContext = createContext();

class ProductTechnicalDetailsContextProvider extends Component {
  state = {
    Brand: "BoAt",
    Manufacturer:
      "Imagine Marketing Pvt Ltd, Imagine Marketing Pvt Ltd., 255, Guru Gobind Industrial Estate, Jay Coach, Goregaon East, Mumbai, Maharashtra- 400063",
    Model: "BassHeads 100",
    ModelName: "BassHeads 100",
    ModelYear: 2017,
    ProductDimensions: "120 x 0.1 x 0.2 cm; 40 Grams",
    ItemModelNumber: "BassHeads 100",
    CompatibleDevices: "All 3.5mm Jack device",
    SpecialFeatures:
      "Android Phone Control, IOS Phone Control, Tangle-Free Cord, Lightweight, Microphone Feature",
    MountingHardware:
      "Bassheads 100, Additional Earbuds, Carry Pouch, Warranty Card",
    NumberOfItems: 4,
    MicrophoneFormFactor: "Built-In",
    HeadphonesFormFactor: "In Ear",
    BatteriesIncluded: "No",
    BatteriesRequired: "No",
    ConnectorType: "Wired",
    ManufacturerName: "Imagine Marketing Pvt Ltd",
    CountryOfOrigin: "China",
    ItemWeight: "40 g",
    ProductName:"Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Yellow)"
  };
  //   setIncrementCount = (e) => {
  //     this.setState({
  //       count: 1,
  //     });
  //   };
  //   loginEmailSubmit = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //     console.log(this.state);
  //   };
  //   //   setDecrementCount = (e) => {
  //   //     this.setState({
  //   //       count: 0,
  //   //     });
  //   //   };
  //   loginPasswordSubmit = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //     console.log(this.state);
  //   };
  //   loginAuth = (e) => {
  //     this.setState({
  //       loggedIn: true,
  //     });
  //   };
  render() {
    return (
      <ProductTechnicalDetailsContext.Provider
        value={{
          ...this.state,
          //   incrementCount: this.setIncrementCount,
          //   //   decrementCount: this.setDecrementCount,
          //   emailSubmit: this.loginEmailSubmit,
          //   passwordSubmit: this.loginPasswordSubmit,
          //   loginAuthonClick: this.loginAuth,
        }}
      >
        {this.props.children}
      </ProductTechnicalDetailsContext.Provider>
    );
  }
}

export default ProductTechnicalDetailsContextProvider;
