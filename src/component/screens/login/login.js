// import { Button } from "reactstrap";
import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import LoginEmail from "./loginEmail";
import LoginPassword from "./loginPassword";

function Login(props) {
  const {
    count,
    email,
    incrementCount,
    // decrementCount,
    emailSubmit,
    passwordSubmit,
    loginAuthonClick,
  } = useContext(LoginContext);
  return (
    <div>
      {count === 0 ? (
        <LoginEmail
          onClick={incrementCount}
          // setEmailValue={this.setEmail}
          onChange={emailSubmit}
          // email={this.state.email}
        />
      ) : (
        <LoginPassword
          onClick={loginAuthonClick}
          onChange={passwordSubmit}
          email={email}
          // password={this.password}
        />
      )}

      {/* <div>This is login page</div>
          <Button onClick={(e) => this.countFunction(e)}>Press</Button>
          <h1>Press count: {this.state.count}</h1> */}
    </div>
  );
}

export default Login;
