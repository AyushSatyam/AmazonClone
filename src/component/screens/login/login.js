// import { Button } from "reactstrap";
import React from "react";
import LoginEmail from "./loginEmail";
import LoginPassword from "./loginPassword";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
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
  setDecrementCount = (e) => {
    this.setState({
      count: 0,
    });
  };
  loginPasswordSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  // componentDidMount() {
  //   this.setState({
  //     count: this.state.count,
  //     email: this.state.email,
  //   });
  // }
  // const [count, setCount] = useState(0);
  // const [email, setEmail] = useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setCount(count+1)
  // },[]);
  render() {
    return (
      <div>
        {this.state.count === 0 ? (
          <LoginEmail
            onClick={(e) => this.setIncrementCount(e)}
            // setEmailValue={this.setEmail}
            onChange={(e) => {
              this.loginEmailSubmit(e);
            }}
            // email={this.state.email}
          />
        ) : (
          <LoginPassword
            onClick={(e) => this.setDecrementCount(e)}
            onChange={(e) => {
              this.loginPasswordSubmit(e);
            }}
            email={this.state.email}
            // password={this.password}
          />
        )}

        {/* <div>This is login page</div>
          <Button onClick={(e) => this.countFunction(e)}>Press</Button>
          <h1>Press count: {this.state.count}</h1> */}
      </div>
    );
  }
}

export default Login;
