import React, { Component, createContext } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
  state = {
    count: 0,
    email: "",
    password: "",
    loggedIn: false,
  };
  setIncrementCount = (e) => {
    this.setState({
      count: 1,
    });
  };
  loginEmailSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  //   setDecrementCount = (e) => {
  //     this.setState({
  //       count: 0,
  //     });
  //   };
  loginPasswordSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  loginAuth = (e) => {
    this.setState({
      loggedIn: true,
    });
  };
  render() {
    return (
      <LoginContext.Provider
        value={{
          ...this.state,
          incrementCount: this.setIncrementCount,
          //   decrementCount: this.setDecrementCount,
          emailSubmit: this.loginEmailSubmit,
          passwordSubmit: this.loginPasswordSubmit,
          loginAuthonClick: this.loginAuth,
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContextProvider;
