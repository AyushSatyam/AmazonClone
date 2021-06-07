import React, { Component, createContext } from "react";

export const ProductAdditionalInformationContext = createContext();

class ProductAdditionalInformationContextProvider extends Component {
  state = {
    ASIN: "B071Z8M4KX",
    CustomerReviewsStart: 4.1,
    CustomerReviewsRating: "168,833",
    BestSellersRank: 1,
    DateFirstAvailable: false,
    Importer:
      "Imagine Marketing Pvt Ltd., 255, Guru Gobind Industrial Estate, Jay Coach, Goregaon East, Mumbai, Maharashtra- 400063 ",
    ItemDimensionsLxWxH: "120 x 0.1 x 0.2 Centimeters ",
    NetQuantity: "1",
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
      <ProductAdditionalInformationContext.Provider
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
      </ProductAdditionalInformationContext.Provider>
    );
  }
}

export default ProductAdditionalInformationContextProvider;
